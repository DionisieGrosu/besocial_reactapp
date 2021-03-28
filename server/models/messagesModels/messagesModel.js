const mongoose = require('mongoose');
const { Schema } = mongoose;

const messagesSchema = Schema({
    senterId: mongoose.ObjectId,
    recieverId: mongoose.ObjectId,
    uploadsFiles: [String],
    postRef: mongoose.ObjectId,
    body: String,
    readed: { type: Boolean, required: true, default: false },
    deleted: { type: Boolean, required: true, default: false },
    updated: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.messagesModel = mongoose.model('Messages', messagesSchema);