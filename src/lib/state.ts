import { derived, writable } from 'svelte/store';
import type { Character, FSQPointOfInterest, FSQTags } from '$lib/types';

export const state = writable({
	currentLocation: '',
	visitedPlaces: [] as [string, number][],
	character: null as Character | null,
	tags: {} as FSQTags,
	destinationChoices: [] as FSQPointOfInterest[]
});

export const relevantTags = derived(state, ({ character, tags }) => {
	const relevant: string[] = [];
	for (const id of character?.preferences || []) {
		const labels = tags[id].full_label;
		relevant.push(labels[labels.length - 1]);
	}
	return relevant;
});
