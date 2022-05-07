import { select } from '$lib/db';
import { pickNearest } from '$lib/pathfinding';
import type { PointOfInterest } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

export type DestinationRequest = {
	/** ID of the user's current location */
	currentLocation: string;

	/** List of visited location IDs */
	visited: string[];

	/** List of location IDs to ignore */
	excludeLocations?: string[];

	/** Number of locations to return */
	n?: number;
};

export type DestinationResponse = {
	excludeSuccessful: boolean;
	destinations: PointOfInterest[];
};

type RawPOI = {
	id: string;
	name: string;
	lat: number;
	lon: number;
};

type RawPOIDetails = {
	tagID: number;
	tagName: string;
	snippetID: number;
	snippetTitle: string;
	snippetLore: string;
};

export const post: RequestHandler<never, DestinationResponse> = async ({ request }) => {
	const posted: DestinationRequest = await request.json();

	const excludeLocations = posted.excludeLocations || [];
	const n = posted.n || 3;

	const queryResult = await select<RawPOI>(
		`
    SELECT * FROM points_of_interest
    `
	);

	const currentLocation = queryResult.find((poi) => poi.id === posted.currentLocation)!;

	// Remove current and already visited locations
	const possibleChoices = queryResult
		.filter((poi) => !posted.visited.includes(poi.id))
		.filter((poi) => poi.id !== currentLocation.id);

	// Remove locations discarded by user
	let excludeSuccessful = true;
	let choices = possibleChoices.filter((poi) => !excludeLocations.includes(poi.id));
	if (choices.length === 0) {
		// Ignore exlusion request if there are no other
		// POIs to return otherwise (after user has ignored too many)
		choices = possibleChoices;
		excludeSuccessful = false;
	}

	const nearest = pickNearest(currentLocation, choices, n);
	const incompleteDestinations: Partial<PointOfInterest>[] = nearest.map(([poi, distance]) => ({
		id: poi.id,
		name: poi.name,
		distance: distance
	}));

	for (const d of incompleteDestinations) {
		const rawDetailsQuery = await select<RawPOIDetails>(
			`
      SELECT
        t.id AS tagID,
        t.name AS tagName,
        sn.id AS snippetID,
        sn.title AS snippetTitle,
        sn.lore AS snippetLore
      FROM
        point_of_interest_tags lxt
        JOIN tags t ON t.id = lxt.tag_id
        JOIN tag_snippets tsn ON tsn.tag_id = t.id
        JOIN story_snippets sn ON sn.id = tsn.snippet_id
      WHERE
        lxt.poi_id = '${d.id}'
      LIMIT 1;
      `
		);
		const rawDetails = rawDetailsQuery[0];

		d.tag = {
			id: rawDetails.tagID,
			description: rawDetails.tagName
		};
		d.snippet = {
			id: rawDetails.snippetID,
			title: rawDetails.snippetTitle,
			lore: rawDetails.snippetLore
		};
	}
	const destinations = incompleteDestinations as PointOfInterest[];

	return {
		body: {
			excludeSuccessful,
			destinations
		}
	};
};
