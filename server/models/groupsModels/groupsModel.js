const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupsSchema = Schema({
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    moderatorId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    mainImage: String,
    groupName: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GroupsPosts' }],
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    subscribersCount: { type: Number, default: 0 },
    deleted: { type: Boolean, required: true, default: false },
    updated: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

// messagesSchema.virtual('user', {
//     ref: "UserDetails",   //must be changed to the name you used for Comment model.
//   foreignField: "animalRef",
//   localField: "_id"
// })

// messagesSchema.virtual('userRef', {
//     ref: 'UserDetails',
//     localField: 'recieverId',
//     foreignField: 'userId'
// });

// messagesSchema.set('toObject', { virtuals: true });

exports.groupsModel = mongoose.model('Groups', groupsSchema);