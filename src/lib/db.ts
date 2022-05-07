import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
const dbFile = 'server-data.db';

export function select<T = unknown>(sql: string): Promise<T[]> {
	return new Promise((resolve, reject) => {
		const db = new sqlite.Database(dbFile);
		const queries: T[] = [];
		db.each(
			sql,
			(err, row) => {
				if (err) {
					reject(err); // optional: you might choose to swallow errors.
				} else {
					queries.push(row); // accumulate the data
				}
			},
			(err, n) => {
				if (err) {
					reject(err); // optional: again, you might choose to swallow this error.
				} else {
					resolve(queries as T[]); // resolve the promise
				}
			}
		);
	});
}

export function insert(sql: string): Promise<number> {
	return new Promise((resolve, reject) => {
		const db = new sqlite.Database(dbFile);
		db.run(sql, function (err) {
			if (err) {
				reject(err);
			} else {
				resolve(this.lastID);
			}
		});
	});
}
