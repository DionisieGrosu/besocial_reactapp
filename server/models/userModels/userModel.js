const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userDetails: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserDetails' },
    locked: { type: Boolean, required: true, default: true },
    online: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});


exports.userModel = mongoose.model('User', userSchema);