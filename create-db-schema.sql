DROP TABLE IF EXISTS character_preferences;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS story_parts;
DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS story_snippets;
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id          TEXT, -- GUID
    name        TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE characters (
    id                  INTEGER,
    name                TEXT,
    created_by          TEXT,
    picture_url         TEXT,
    preferred_tag_ids   TEXT,
    short_description   TEXT,
    long_description    TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(created_by) REFERENCES users(id)
);

CREATE TABLE story_snippets (
    id          INTEGER,
    tag_id      INTEGER,
    title       TEXT,
    action      TEXT,
    lore        TEXT,
    picture_url TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE stories (
    id          INTEGER,
    created_by  TEXT,
    created_at  TEXT, -- YYYY-MM-DD HH:MM:SS.SSS format
    PRIMARY KEY(id),
    FOREIGN KEY(created_by) REFERENCES users(id)
);

CREATE TABLE story_parts (
    story_id        INTEGER,
    render_order    INTEGER NOT NULL,
    snippet_id      INTEGER,
    snippet_params  TEXT, -- JSON
    PRIMARY KEY(story_id, snippet_id),
    FOREIGN KEY(story_id) REFERENCES stories(id),
    FOREIGN KEY(snippet_id) REFERENCES story_snippets(id)
);

CREATE TABLE tags (
    id      INTEGER,
    name    TEXT,
    icon    TEXT,
    PRIMARY KEY(id)
);
