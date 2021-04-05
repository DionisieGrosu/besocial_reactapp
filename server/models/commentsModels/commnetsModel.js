const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = Schema({
    userId: mongoose.Schema.Types.ObjectId,
    elemId: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    body: String,
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

exports.commentsModel = mongoose.model('Comments', commentsSchema);