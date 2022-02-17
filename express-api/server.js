const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors('*'));
app.use(express.json());

const authRoutes = require('./controllers/auth');
const userRoutes = require('./controllers/users');
const highscoreRoutes = require('./controllers/highscores');
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/highscores', highscoreRoutes);

app.get('/', (req, res) => res.json({ message: 'Yesss it works!!' }));

module.exports = app;
