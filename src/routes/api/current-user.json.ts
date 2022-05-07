import { select } from '$lib/db';
import type { User } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const usersResult = (await select(
		`
    SELECT * 
    FROM users 
    WHERE id = "45a779c9-51c0-4138-8207-10e6b087e9d0"
    `
	)) as User[];
	return { body: { user: usersResult[0] } };
};
