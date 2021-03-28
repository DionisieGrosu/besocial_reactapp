const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = Schema({
    userId: mongoose.ObjectId,
    elemId: mongoose.ObjectId,
    type: { type: String, required: true },
    body: String,
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.commentsModel = mongoose.model('Likes', commentsSchema);