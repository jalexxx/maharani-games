const db = require('../db_config/config');
const SQL = require('sql-template-strings');

class Highscore {
    constructor(data) {
        this.score = data.score
        this.game=data.game
        this.username = data.username
    }

    static get all(){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT highscores.*, users.username as username
                                                    FROM highscores 
                                                    JOIN users ON highscores.user_id = users.id;`);
                let highscores = result.rows.map(r => new Highscore(r))
                res(highscores)
            } catch (err) {
                rej(`Error retrieving highscores: ${err}`)
            }
        })
    }
}

module.exports = Highscore
