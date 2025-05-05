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

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ username: 'michael', age: 32 });
//     // const tweet1 = new Tweet({ text: 'I am on top of the world.', likes: 0 });
//     // tweet1.user = user;
//     // user.save();
//     // tweet1.save();
//     const user = await User.findOne({ username: 'Michael' });
//     const tweet2 = new Tweet({ text: 'I am down in the dumps.', likes: 10 });
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({})
        .populate('user', 'username');
    console.log(t);
}

findTweet();