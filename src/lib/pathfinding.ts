import type { HasLocation, Location } from '$lib/types';

// see https://www.movable-type.co.uk/scripts/latlong.html#distance
export function shortestDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
	const R = 6371e3; // metres
	const phi1 = (lat1 * Math.PI) / 180; // phi, lambda in radians
	const phi2 = (lat2 * Math.PI) / 180;
	const dPhi = ((lat2 - lat1) * Math.PI) / 180;
	const dLambda = ((lon2 - lon1) * Math.PI) / 180;

	const a =
		Math.sin(dPhi / 2) * Math.sin(dPhi / 2) +
		Math.cos(phi1) * Math.cos(phi2) * Math.sin(dLambda / 2) * Math.sin(dLambda / 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	const d = R * c; // metres
	return d;
}

export function pickNearest<T>(currentPos: T & HasLocation, choices: (T & HasLocation)[], n = 3) {
	// Find distances from `currentPos`
	const distances: [T & HasLocation, number][] = [];
	let minDistance = Number.MAX_VALUE;

	for (const c of choices) {
		const d = shortestDistance(currentPos.lat, currentPos.lon, c.lat, c.lon);
		minDistance = Math.min(minDistance, d);
		distances.push([c, d]);
	}

	// Sort by distance, find nearest n
	distances.sort((a, b) => a[1] - b[1]);
	const nearest = distances.slice(0, n);

	return nearest;
}

class Pathfinder {
	private currentChoices: Set<HasLocation>;
	private visited: Set<HasLocation>;

	constructor(private originalChoices: Set<HasLocation>) {
		this.currentChoices = originalChoices;
		this.visited = new Set<HasLocation>();
	}

	public setVisited(loc: HasLocation) {
		this.visited.add(loc);
	}

	public pickNearest(currentPos: HasLocation, n = 3) {
		if (!this.currentChoices.has(currentPos)) {
			throw Error();
		}

		// Repopulate current choices with unvisited locations if exhausted
		if (this.currentChoices.size === 0) {
			for (const c of this.originalChoices) {
				if (this.visited.has(c)) {
					continue;
				}
				this.currentChoices.add(c);
			}
		}

		this.currentChoices.delete(currentPos);

		// Find distances from `currentPos`
		const distances: [HasLocation, number][] = [];
		let minDistance = Number.MAX_VALUE;

		for (const c of this.currentChoices) {
			const d = shortestDistance(currentPos.lat, currentPos.lon, c.lat, c.lon);
			minDistance = Math.min(minDistance, d);
			distances.push([c, d]);
		}

		// Sort by distance, find nearest n
		distances.sort((a, b) => a[1] - b[1]);
		const nearest = distances.slice(0, n).map((v) => v[0]);

		for (const nc of nearest) {
			this.currentChoices.delete(nc);
		}

		return nearest;
	}
}
