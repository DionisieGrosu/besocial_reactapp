const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupsPostsSchema = Schema({
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Groups' },
    uploadsFiles: [String],
    body: String,
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

exports.groupsPostsModel = mongoose.model('GroupsPosts', groupsPostsSchema);