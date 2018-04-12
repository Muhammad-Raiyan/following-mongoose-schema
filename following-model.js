const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const followerSchema = mongoose.Schema({
    username: {
        type: String
    },
    
    following: [{
        username: String,
    }]
});

tweetSchema.plugin(timestamps);
module.exports = mongoose.model('followings', tweetSchema);
