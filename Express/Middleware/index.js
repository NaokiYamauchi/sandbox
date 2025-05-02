const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Use morgan for concise logging
app.use(morgan('dev'));

// // Custom middleware example
// app.use((req, res, next) => {
//     console.log('Custom middleware: Hey!');
//     next(); // Important to call next() to pass control to the next middleware
// });

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('DOGS!!!');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'secret') {
        return next();
    }
    res.send('Password is Needed');
};

// Routes
app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/dogs', (req, res) => {
    res.send('Dog Person!!');
});

app.get('/secret', verifyPassword, (req, res, next) => {
    res.send('This is a secret page');
});

app.use((req, res) => {
    res.status(404).send('404: No Page Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});