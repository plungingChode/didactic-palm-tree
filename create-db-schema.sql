DROP TABLE IF EXISTS tag_snippets;
DROP TABLE IF EXISTS point_of_interest_tags;
DROP TABLE IF EXISTS character_preferences;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS points_of_interest;
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
    id          INTEGER,
    name        TEXT,
    created_by  TEXT,
    PRIMARY KEY(id)
    FOREIGN KEY(created_by) REFERENCES users(id)
);

CREATE TABLE story_snippets (
    id          INTEGER,
    title       TEXT,
    lore        TEXT,
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

CREATE TABLE points_of_interest (
    id          TEXT, -- Foursquare ID string
    name        TEXT,
    lat         REAL,
    lon         REAL,
    PRIMARY KEY(id)
);

CREATE TABLE tags (
    id      INTEGER,
    name    TEXT,
    icon    TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE character_preferences (
    character_id        INTEGER,
    preference_tag_id   INTEGER,
    PRIMARY KEY(character_id, preference_tag_id),
    FOREIGN KEY(character_id) REFERENCES characters(id),
    FOREIGN KEY(preference_tag_id) REFERENCES tags(id)
);

CREATE TABLE point_of_interest_tags (
    poi_id  TEXT,
    tag_id  INTEGER,
    PRIMARY KEY(poi_id, tag_id),
    FOREIGN KEY(poi_id) REFERENCES points_of_interest(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id)
);

CREATE TABLE tag_snippets (
    tag_id      INTEGER,
    snippet_id  INTEGER,
    PRIMARY KEY(tag_id, snippet_id),
    FOREIGN KEY(tag_id) REFERENCES tags(id),
    FOREIGN KEY(snippet_id) REFERENCES story_snippets(id)
);
