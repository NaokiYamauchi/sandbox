const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('Request Accepted');
//     // res.send('Respond back');
//     // res.send({ color: 'red' });
//     res.send('<h1>First Web Page</h1>');
// });

app.get('/cats', (req, res) => {
    res.send('CATS');
});

app.post('/cats', (req, res) => {
    res.send('Post Request: CATS');
});

app.get('/dogs', (req, res) => {
    res.send('DOGS!');
});

app.get('/', (req, res) => {
    res.send('HOMEPAGE!');
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>subreddit page: ${subreddit}, ID: ${postId}</h1>`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (q) {
        res.send(`<h1>Research Result: ${q}</h1>`);
    } else {
        res.send('<h1>No search term provided</h1>');
    }
});

app.get(/(.*)/, (req, res) => {
    res.send('Pass does not exist');
})

app.listen(8080, () => {
    console.log('Request port 8080');
});