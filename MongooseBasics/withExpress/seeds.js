const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB  Connection Established');
    })
    .catch(err => {
        console.log('MongoDB Connection Error');
        console.log(err);
    });

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.98,
//     category: 'fruits'
// });
// p.save().then(p => {
//     console.log(p);
// }).catch(e => {
//     console.log(e);
// });

const seedProducts = [
    {
        name: 'Eggplant',
        price: 0.98,
        category: 'veges'
    },
    {
        name: 'Cut Melon',
        price: 4.80,
        category: 'fruits'
    },
    {
        name: 'Cut Seedless Watermelon',
        price: 3.80,
        category: 'fruits'
    },
    {
        name: 'Organic Celery',
        price: 1.98,
        category: 'veges'
    },
    {
        name: 'Coffee Milk',
        price: 2.98,
        category: 'dairy'
    },
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });