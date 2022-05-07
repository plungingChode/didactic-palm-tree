import sqlite3 from 'sqlite3';
import { readFileSync } from 'fs';

const db = new sqlite3.Database('server-data.db');
const schema = readFileSync('create-db-schema.sql', { encoding: 'utf-8' });

db.exec(schema);
db.close();
