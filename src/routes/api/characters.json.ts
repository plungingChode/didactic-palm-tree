import type { RequestHandler } from '@sveltejs/kit';
import { select } from '$lib/db';
import { uniqBy, uniq, map } from 'lodash';
import type { Character } from '$lib/types';

export const get: RequestHandler = async ({ params, url }) => {
	const user = url.searchParams.get('user') || null;
	const result = (await select(
		`
    SELECT
      c.id AS characterID,
      c.name AS name,
      c.created_by AS createdBy,
      t.id AS tagID,
      t.name AS tag
    FROM characters c
      LEFT JOIN character_preferences p ON c.id = p.character_id
      LEFT JOIN tags t	ON p.preference_tag_id = t.id;
    WHERE user = ${user} OR user IS NULL
    `
	)) as any[];

	const rawCharacters = result.map((row) => ({
		id: row.characterID,
		name: row.name,
		createdBy: row.createdBy
	}));
	const distinctCharacters = uniqBy(rawCharacters, (a) => a.id);
	const characters: Character[] = distinctCharacters.map((c) => ({
		id: c.id,
		isUserCreated: c.createdBy !== null,
		name: c.name,
		preferences: []
	}));

	for (const c of characters) {
		c.preferences = result
			.filter((r) => r.characterID === c.id)
			.map((pref) => ({ id: pref.tagID, description: pref.tag }));
	}

	return {
		body: characters
	};
};
