import sqlite3 from 'sqlite3';
import fs from 'fs';

const db = new sqlite3.Database('server-data.db');

function readJSON(file) {
	const raw = fs.readFileSync(file, 'utf-8');
	const parsed = JSON.parse(raw);
	return parsed;
}

const snippets = readJSON('mock/snippets.json');

for (const s of snippets) {
	db.exec(
		`
    INSERT INTO story_snippets (
      tag_id, title, action, lore, picture_url
    )
    VALUES (
      ${s.id}, "${s.title}", "${s.action}", "${s.lore}", "${s.pictureURL}"
    );
    `
	);
}

const characters = readJSON('mock/characters.json');
for (const c of characters) {
	db.exec(
		`
    INSERT INTO characters (name, picture_url, preferred_tag_ids)
    VALUES ('${c.name}', '${c.picture_url}', '${JSON.stringify(c.preferred_tag_ids)}');
    `
	);
}
