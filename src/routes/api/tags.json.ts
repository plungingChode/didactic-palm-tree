import { getTags } from '$lib/foursquare';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		body: await getTags()
	};
};
