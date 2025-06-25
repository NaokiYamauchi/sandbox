const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('Dogggg!!');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'supersecret') {
        return next();
    }
    // res.send('Password is required');
    throw new AppError('Password is required', 401);
}

// app.use((req, res, next) => {
//     console.log('First middleware!!!');
//     return next();
//     console.log('After next() in the first middleware!!!');
// });
// app.use((req, res, next) => {
//     console.log('Second middleware!!!');
//     return next();
// });
// app.use((req, res, next) => {
//     console.log('Third middleware!!!');
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('Homepage!!');
});

app.get('/error', (req, res) => {
    hoge.moge();
});

app.get('/dogs', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('Woof woof');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('This is a secret page!! Don’t tell anyone!!');
});

app.get('/admin', (req, res) => {
    throw new AppError('Only administrators can access!', 403);
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

// app.use((err, req, res, next) => {
//     console.log('********************************');
//     console.log('************** ERROR **************');
//     console.log('********************************');
//     // res.status(500).send('An error occurred!!!');
//     console.log(err);
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = 'An error occurred' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('Listening on localhost:3000...');
});