const mongoose = require('mongoose');
const { Schema } = mongoose;

const userImagesSchema = Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    path: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Likes' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.userImagesModel = mongoose.model('UserImages', userImagesSchema);