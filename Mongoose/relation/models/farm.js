const mongoose = require('mongoose');
const { Schema } = mongoose;

// Optional: set strictQuery to avoid deprecation warning
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB Connection Established');
    })
    .catch(err => {
        console.log('MongoDB Connection Error');
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'melon', price: 4.98, season: 'summer' },
//     { name: 'watermelon', price: 4.98, season: 'summer' },
//     { name: 'eggplant', price: '2.98', season: 'summer' }
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Chill Farm', city: 'LA' });
//     const melon = await Product.findOne({ name: 'melon' });
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Chill Farm' });
    const watermelon = await Product.findOne({ name: 'watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({ name: 'Chill Farm' })
    .populate('products')
    .then(farm => console.log(farm));