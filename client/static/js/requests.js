async function getAllHighscores(){
    try {
        const options = {
            headers: new Headers({'Authorization': localStorage.getItem('token')}),
        }
        const response = await fetch('http://localhost:3000/highscores', options);
        const data = await response.json();
        if(data.err){
            console.warn(data.err);
            logout();
        }
        return data;
    } catch (err) {
        console.warn(err);
    }
}


//do appendHighscore next (append to cool leaderboard table)

function appendHighScore() {
    const highScoresList = document.querySelector('table');
    const newRow = document.createElement('tr');
    highScoresList.append(newRow);
}


// create highscore




function submitHighscore(e){
    e.preventDefault();

    const highscoreData = {
        username: localStorage.getItem('username'),
        game: 'Tetris',
        score: e.target.score.value
    };
    console.log(highscoreData)

    const options = { 
        method: 'POST',
        body: JSON.stringify(highscoreData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/highscores', options)
        .then(r => r.json())
        //.then(appendHighscore)
        //.then(() => e.target.reset())
       // .catch(console.warn)
};
