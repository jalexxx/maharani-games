DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(255) UNIQUE,
    email varchar(100) UNIQUE,
    password_digest varchar(500)
);

DROP TABLE IF EXISTS highscores;

CREATE TABLE highscores (
    id serial PRIMARY KEY,
    user_id int,
    score int,
    game varchar(100)
);
