

function renderHomepage(){
    const welcome = document.createElement('h1');
    welcome.id = 'welcome';
    welcome.textContent = 'WELCOME TO MAHARANI GAMES!!!!'
    main.appendChild(welcome);
    const explain = document.createElement('h2');
    explain.id = 'explain';
    explain.textContent = 'ANAGRAMS INIT FAM DATS THE BIRTH STORY'
    main.appendChild(explain);
    const anagram = document.createElement('img')
    anagram.id = 'anagram'
    anagram.src = 'images/anagram.png'
    main.appendChild(anagram);
}

function renderLoginForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
}

function renderRegisterForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestRegistration)
    main.appendChild(form);
}

//HighScores
const hstable = document.createElement('table')
hstable.className = 'hstable';
const thUser = document.createElement('th')
thUser.textContent = 'Username'
const thGame = document.createElement('th')
thGame.textContent = 'Game'
const thScore = document.createElement('th')
thScore.textContent = 'Score'
document.querySelectorAll('th').className = 'th';

async function renderHighscoreboard() {
    
    

    const hsTitle = document.createElement('h2')
    hsTitle.classList = 'hsTitle'
    hsTitle.textContent = 'LEADERBOARD'

    main.append(hsTitle);


    const highscoreboard = document.createElement('section');
    highscoreboard.id = 'highscoreboard';
    const highscores = await getAllHighscores();
    
    if(highscores.err){return}
    


    const renderHighscore = highscoreData => {

        
        const tr = document.createElement('tr')
        hstable.className = 'tr';

        hstable.append(tr)

        tr.append(thUser)
        tr.append(thGame)
        tr.append(thScore)

        const userTd = document.createElement('td');
        const gameTd = document.createElement('td');
        const scoreTd = document.createElement('td');
        document.querySelectorAll('td').className = 'td';

        userTd.textContent = highscoreData.username;
        scoreTd.textContent = highscoreData.score;
        gameTd.textContent = highscoreData.game;
        
        thUser.append(userTd)
        thGame.append(gameTd)
        thScore.append(scoreTd)

        highscoreboard.appendChild(hstable);
    }
    highscores.forEach(renderHighscore);
    main.appendChild(highscoreboard);
    
    
   
}

function renderGamePage() {


    const tetrisDiv = document.createElement('div')
    tetrisDiv.id = 'tetrisDiv'
     const tetrisForm = document.createElement('form');
    const tetrisInput= document.createElement('input')
    
     tetrisForm.append(tetrisInput)
     tetrisDiv.append(tetrisForm)
     main.appendChild(tetrisDiv)

    tetrisInput.type = 'button'
    tetrisInput.value = 'Play Tetris'

  
    
    tetrisInput.addEventListener('click', () => {
        
        renderTetris()

        window.addEventListener("keydown", function(e) {
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);

            

    }, {once: true})
    
    
    
   
        

}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}


