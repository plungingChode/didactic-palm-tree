import { insert, select } from '$lib/db';
import { DateTime } from 'luxon';
import type { Story } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

type RawDatabaseSnippet = {
	storyID: number;
	snippetLore: string;
	snippetTitle: string;
	rawParams: string;
};

type UserPostedStory = {
	user: string;
	snippets: {
		id: number;
		params: Record<string, string>;
	}[];
};

export const get: RequestHandler = async ({ params, url }) => {
	const user = url.searchParams.get('user') || null;

	const result = await select<RawDatabaseSnippet>(
		`
    SELECT
      s.id AS storyID,
      -- s.title,
      sn.title AS snippetTitle,
      sn.lore AS snippetLore,
      sp.snippet_params AS rawParams
    FROM stories s
      JOIN story_parts sp ON s.id = sp.story_id
      JOIN story_snippets sn ON sn.id = sp.snippet_id
    WHERE
      s.created_by = '${user}'
    ORDER BY
      s.id,
      sp.render_order;
    `
	);

	const stories: Story[] = [];

	for (let i = 0; i < result.length; i++) {
		const currentStory: Story = {
			id: result[i].storyID,
			snippets: []
		};
		while (result[i] && result[i].storyID === currentStory.id) {
			currentStory.snippets.push({
				title: result[i].snippetTitle,
				lore: result[i].snippetLore,
				action: '',
				params: JSON.parse(result[i].rawParams)
			});
			i++;
		}
		stories.push(currentStory);
	}

	return { body: { stories } };
};

export const post: RequestHandler = async ({ request }) => {
	const postedStory: UserPostedStory = await request.json();
	const storyID = await insert(
		`
    INSERT INTO stories (
      created_by, created_at
    )
    VALUES (
      '${postedStory.user}',
      '${DateTime.now().toISO({ includeOffset: false })}'
    );
    `
	);

	for (let i = 0; i < postedStory.snippets.length; i++) {
		const snippet = postedStory.snippets[i];

		insert(`
      INSERT INTO story_parts (
        story_id, 
        render_order, 
        snippet_id, 
        snippet_params
      )
      VALUES (
        ${storyID},
        ${i},
        ${snippet.id},
        '${JSON.stringify(snippet.params)}'
      );
    `);
	}

	return { status: 200 };
};
