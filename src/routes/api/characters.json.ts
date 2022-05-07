import type { RequestHandler } from '@sveltejs/kit';
import { select } from '$lib/db';
import { uniqBy, uniq, map } from 'lodash';
import type { Character } from '$lib/types';
import { getTags } from '$lib/foursquare';

type RawCharacter = {
	id: number;
	name: string;
	preferred_tag_ids: string;
	created_by: boolean;
	picture_url: string;
};

export const get: RequestHandler = async ({ params, url }) => {
	// const user = url.searchParams.get('user') || null;
	const rawCharacters = await select<RawCharacter>(`SELECT * FROM characters;`);

	const characters: Character[] = rawCharacters.map((raw) => ({
		id: raw.id,
		isUserCreated: raw.created_by !== null,
		name: raw.name,
		pictureURL: '/class_icons/' + raw.picture_url,
		preferences: JSON.parse(raw.preferred_tag_ids)
	}));

	return {
		body: characters
	};
};
