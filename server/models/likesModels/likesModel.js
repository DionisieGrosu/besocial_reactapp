const mongoose = require('mongoose');
const { Schema } = mongoose;

const likesSchema = Schema({
    userId: mongoose.ObjectId,
    elemId: mongoose.ObjectId,
    type: { type: String, required: true },

    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.likesModel = mongoose.model('Likes', likesSchema);