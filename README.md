# Welcome to Maharani Games! -WIP

Create your own gaming account, choose from our selection of games and start playing! 

## Installation & Usage

### Installation

- Clone or fork the repo
- Navigate to the maharani-games folder at the command line 
- Run `npm install` to install dependencies

### Usage

- Create a `.env` file in the `express-api` folder and add a key of `SECRET` assigned anything you like eg `SECRET=my_super_secret`
- Start the client using `cd client` and then either `http-server` (node) / `python -m http.server` / open the `index.html` file in your browser
- Start the server and database using `docker compose up` 
- Once you are done, stop the server and database using `docker compose down --volumes --remove-orphans`
- Stop the client using <kbd>Ctrl</kbd> + <kbd>C</kbd>

### Deployment

- View the client live on [Netlify](https://maharani-games.netlify.app/)

### Testing

- In the maharani-games folder run `npm test` to launch the jest test suite
