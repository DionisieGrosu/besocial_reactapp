const mongoose = require('mongoose');
const { Schema } = mongoose;

const userImagesSchema = Schema({
    imageId: mongoose.ObjectId,
    path: { type: String, required: true },

    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.userImagesModel = mongoose.model('UserImages', userImagesSchema);