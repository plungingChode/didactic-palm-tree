import { select } from '$lib/db';
import { getPlacesNearby, getPlacesNearbyCached } from '$lib/foursquare';
import { pickNearest } from '$lib/pathfinding';
import type { FSQPlace, FSQPointOfInterest, Snippet } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { pick, sample } from 'lodash';

export type DestinationRequest = {
	/** `fsq_id` of the user's current location */
	currentLocation: string;

	/** List of visited location `fsq_id`s */
	visited: string[];

	relevantCategories: number[];

	/** List of location `fsq_id`s to ignore */
	excludeLocations?: string[];

	/** Number of locations to return */
	n?: number;
};

export type DestinationResponse = {
	excludeSuccessful: boolean;
	destinations: FSQPointOfInterest[];
};

export const post: RequestHandler<never, DestinationResponse> = async ({ request }) => {
	const posted: DestinationRequest = await request.json();

	const excludeLocations = posted.excludeLocations || [];
	const n = posted.n || 3;

	const places = await getPlacesNearbyCached();
	const relevantPlaces = places.filter((place) => {
		for (const c of place.categories) {
			if (posted.relevantCategories.includes(c.id)) {
				return true;
			}
		}
		return false;
	});

	const currentLocation = places.find((poi) => poi.fsq_id === posted.currentLocation)!;

	// Remove current and already visited locations
	const possibleChoices = relevantPlaces
		.filter((poi) => !posted.visited.includes(poi.fsq_id))
		.filter((poi) => poi.fsq_id !== currentLocation.fsq_id);

	// Remove locations discarded by user
	let excludeSuccessful = true;
	let choices = possibleChoices.filter((poi) => !excludeLocations.includes(poi.fsq_id));
	if (choices.length === 0) {
		// Ignore exlusion request if there are no other
		// POIs to return otherwise (after user has ignored too many)
		choices = possibleChoices;
		excludeSuccessful = false;
	}

	const nearest = pickNearest(currentLocation, choices, n);
	const incompleteDestinations: Partial<FSQPointOfInterest>[] = nearest.map(([poi, distance]) => ({
		...poi,
		distance
	}));

	for (const d of incompleteDestinations) {
		const tags = d.categories?.map((tag) => tag.id).join(',');

		const snippets = await select<Snippet>(
			`
      SELECT
        id, action, title, lore
      FROM 
				story_snippets
      WHERE
        tag_id IN (${tags});
      `
		);

		d.snippet = sample(snippets);
	}
	const destinations = incompleteDestinations as FSQPointOfInterest[];

	return {
		body: {
			excludeSuccessful,
			destinations
		}
	};
};
