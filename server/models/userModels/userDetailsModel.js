const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetailsSchema = Schema({
    userId: { type: mongoose.ObjectId, required: true },
    email: String,
    status: String,
    birthdate: Date,
    sex: String,
    phoneNumber: Number,
    avatar: mongoose.ObjectId,
    mainImage: String,
    friends: [mongoose.ObjectId],
    groups: [mongoose.ObjectId],
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.userDetailsModel = mongoose.model('UserDetails', userDetailsSchema);