export type Location = {
	/** Latitude in degrees */
	lat: number;
	/** Longitude in degrees */
	lon: number;
};

export interface HasLocation {
	/** Latitude in degrees */
	lat: number;
	/** Longitude in degrees */
	lon: number;
}

export type User = {
	id: string;
	name: string;
};

export type Tag = {
	id: number;
	description: string;
};

export type Character = {
	id: number;
	name: string;
	preferences: Tag[];
	isUserCreated: boolean;
};

export type Snippet = {
	id?: number;
	title: string;
	lore: string;
};

export type CompletedSnippet = Snippet & {
	params: Record<string, string>;
};

export type Story = {
	id: number;
	snippets: CompletedSnippet[];
};

export type PointOfInterest = {
	id: string;
	name: string;

	/** Distance from current location in metres */
	distance: number;

	snippet: Snippet;
	tag: Tag;
};
