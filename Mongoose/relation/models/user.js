const mongoose = require('mongoose');

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

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [{
        _id: { _id: false },
        country: String,
        state: String,
        streetAddress: String,
        zip: Number
    }]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Michael',
        last: 'Smith'
    });

    u.addresses.push({
        country: 'United States',
        state: 'California',
        streetAddress: '123 Main St',
        zip: 92123,
    });

    const res = await u.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);

    user.addresses.push({
        country: 'United States',
        state: 'California',
        streetAddress: '1234 Second St',
        zip: 92456,
    });

    const res = await user.save();
    console.log(res);
};

addAddress('68184ecc69dba2723d4948e7');