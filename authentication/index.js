const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost:27017/authDemo',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('MongoDB Connection Established');
    })
    .catch(err => {
        console.log('MongoDB Connection Error');
        console.log(err);
    });

const sessionConfig = {
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
};
app.use(session(sessionConfig));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        req.flash('error', 'Login Required');
        return res.redirect('/login');
    }
    next();
}

app.use(express.urlencoded({ extended: true }));

app.use(flash());
app.use((req, res, next) => {
    res.locals.error = req.flash('error');
    next();
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({
        username,
        password
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    };
});

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});