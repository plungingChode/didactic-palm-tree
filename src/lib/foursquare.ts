import type { FSQPlace, FSQTags } from './types';
import fs from 'fs';

const apiKey = fs.readFileSync('api-key.txt', 'ascii');

export async function getPlacesNearby(): Promise<FSQPlace[]> {
	// TODO parameterize
	const url =
		'https://api.foursquare.com/v3/places/search?fields=fsq_id%2Cdescription%2Cname%2Cgeocodes%2Ccategories%2Cphotos&near=Budapest&limit=50';
	const res = await fetch(url, {
		headers: {
			Authorization: apiKey,
			Accept: 'application/json'
		}
	});

	const places = await res.json();

	return places.results as FSQPlace[];
}

export async function getPlacesNearbyCached(): Promise<FSQPlace[]> {
	const placesString = fs.readFileSync('foursquare-places-result.json', 'utf-8');
	const places = JSON.parse(placesString);
	return places.results;
}

export async function getTags(): Promise<FSQTags> {
	const tagsString = fs.readFileSync('foursquare-tags-taxonomy.json', 'utf-8');
	const tags = JSON.parse(tagsString);
	return tags;
}
