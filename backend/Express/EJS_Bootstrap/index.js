const path = require('path');
const express = require('express');
const app = express();
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }

});

app.get('/rand', (req, res) => {
    const randNum = Math.floor(Math.random() * 10) + 1;
    res.render('random', { randNum });
});

app.get('/cats', (req, res) => {
    const cats = [
        'Tama', 'Tora', 'Kuro', 'Momo', 'Jiji'
    ];
    res.render('cats', { cats });
});

app.listen(3000, () => {
    console.log('Port 3000');
});