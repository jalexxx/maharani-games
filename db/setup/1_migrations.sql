DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(255) NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    password_digest varchar(500) NOT NULL
);

DROP TABLE IF EXISTS highscores;

CREATE TABLE highscores (
    id serial PRIMARY KEY,
    user_id int,
    score int NOT NULL,
    game varchar(100)
);
