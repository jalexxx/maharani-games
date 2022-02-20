const db = require('../db_config/config');
const SQL = require('sql-template-strings');

class User {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.email = data.email
        this.passwordDigest = data.password_digest
    }
    
    static get all(){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM users;`);
                let users = result.rows.map(r => new User(r))
                res(users)
            } catch (err) {
                rej(`Error retrieving users: ${err}`)
            }
        })
    }

    get highscores(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.run(SQL`SELECT id, game FROM highscores WHERE user_id = $1;`, [ this.id ]);
                const highscores = result.rows.map(b => ({game: b.game, path: `/highscores/${b.id}`}));
                resolve(highscores);
            } catch (err) {
                reject("User's highscores could not be found");
            };
        });
    };

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.run(SQL`SELECT * FROM users WHERE id = $1;`, [ id ]); 
                let user = new User(userData.rows[0]);
                resolve (user);
            } catch (err) {
                reject('User not found');
            }
        });
    }

    static create({ username, email, password }){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`INSERT INTO users (username, email, password_digest)
                                                VALUES (${username}, ${email}, ${password}) RETURNING *;`);
                let user = new User(result.rows[0]);
                res(user)
            } catch (err) {
                rej(`Error creating user: ${err}`)
            }
        })
    }

    static findByEmail(email){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM users
                                                WHERE email = ${email};`);
                let user = new User(result.rows[0])
                res(user)
            } catch (err) {
                rej(`Error retrieving user: ${err}`)
            }
        })
    }

    static createforhighscores(username){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.run(SQL`INSERT INTO users (username) VALUES ($1) RETURNING *;`, [ username]);
                let user = new User(userData.rows[0]);
                resolve (user);
            } catch (err) {
                reject('User could not be created');
            };
        });
    };



    static findOrCreateByName(username){
        return new Promise (async (resolve, reject) => {
            try {
                let user;
                const userData = await db.run(SQL`SELECT * FROM users WHERE username = $1;`, [ username ]);
                if(!userData.rows.length) {
                    user = await User.createforhighscores(username);
                } else {
                    user = new User(userData.rows[0]);
                };
                resolve(user);
            } catch (err) {
                reject(err);
            };
        });
    };

    
}

module.exports = User
