const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetailsSchema = Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: String,
    status: String,
    birthdate: Date,
    sex: String,
    phoneNumber: Number,
    avatar: mongoose.Schema.Types.ObjectId,
    mainImage: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UsersFriends' }],
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Groups' }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UsersPosts' }],
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

// userDetailsSchema.virtual('user', {
//     ref: 'Messages',
//     localField: 'userId',
//     foreignField: 'senterId',
//     justOne: true // for many-to-1 relationships
// });

userDetailsSchema.virtual('userRef', {
    ref: 'User',
    localField: 'userId',
    foreignField: 'userDetails'
});
exports.userDetailsModel = mongoose.model('UserDetails', userDetailsSchema);