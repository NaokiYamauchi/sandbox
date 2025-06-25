const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username Required']
    },
    password: {
        type: String,
        required: [true, 'Password Required']
    }
});

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    if (!foundUser) return false;
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
};

userSchema.pre('save', async function (next) {

    if (this.isModified('password'))
        this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);