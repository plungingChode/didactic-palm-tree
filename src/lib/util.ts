import type { FSQPointOfInterest } from './types';

export function prefixWithIndefiniteArticle(text: string) {
	const firstChar = text[0];
	if ('aeiou'.includes(firstChar)) {
		return 'an ' + text;
	} else {
		return 'a ' + text;
	}
}

export const shortLipsum = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
export const longLipsum =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
	'Ab quod molestias incidunt omnis, perspiciatis quas minus' +
	' natus consequatur facilis enim fugiat tempore dolor sunt ipsa! ' +
	'Ducimus, fuga! Iste, maxime necessitatibus?';
