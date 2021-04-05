const likesModel = require('../../models/likesModels/likesModel');
const { groupsPostsModel } = require('../../models/postsModels/groupsPosts');
const { usersPostsModel } = require('../../models/postsModels/usersPosts');
const { userImagesModel } = require('../../models/userModels/userImagesModel');
exports.likeGroupePost = (req, res) => {


    groupsPostsModel.findOne({ _id: req.params.postId }).then(result => {
        if (!result) {
            return res.status(404).json({ message: 'Post was not found!!!' });
        }
        const likeData = {
            userId: req.userInfo._id,
            elemId: req.params.postId,
            type: 'groupePost',
        }
        likesModel.create(likeData).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }
            return res.status(201).json({ message: 'Post was liked succesfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));

    })
}


exports.likeUserPost = (req, res) => {

    usersPostsModel.findOne({ _id: req.params.postid }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Post was not found!!!' });
        }

        const likeData = {
            userId: req.userInfo._id,
            elemId: req.params.postId,
            type: 'userPost',
        }
        likesModel.create(likeData).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }
            return res.status(201).json({ message: 'Post was liked succesfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));
    })
}

exports.dislikeGroupePost = (req, res) => {
    groupsPostsModel.findOne({ _id: req.params.postId }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Post was not found!!!' });
        }

        likesModel.findOneAndDelete({ elemId: req.params.postId, type: 'groupePost' }).then(result => {
            if (!result) {
                return res.status(404).json({ err: 'Like was not found!!!' });
            }

            return res.status(200).json({ message: 'Like was deleted succesfully' });
        }).catch(err => res.status(500).json({ err: err }));
    }).catch(err => res.status(500).json({ err: err }));
}

exports.dislikeUserPost = (req, res) => {

    usersPostsModel.findOne({ _id: req.params.postId }).then(result => {
        if (!result) {
            return res.status(404).json({ message: 'Post was not found!!!' });
        }

        likesModel.findOneAndDelete({ elemId: req.params.postId, type: 'userPost', userId: req.userInfo._id }).then(result => {
            if (!result) {
                return res.status(404).json({ err: 'Like was not found!!!' });
            }

            return res.status(200).json({ message: 'Like was deleted succesfully' });
        }).catch(err => res.status(500).json({ err: err }));

    }).catch(err => res.status(500).json({ err: err }));
}

exports.likeUserImage = (req, res) => {

    userImagesModel.findOne({ _id: req.params.imageId, userId: req.params.userId }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Image was not found!!!' });
        }

        const likeData = {
            userId: req.userInfo._id,
            elemId: req.params.imageId,
            type: 'userImage',
        }
        likesModel.create(likeData).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }
            return res.status(201).json({ message: 'Image was liked succesfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));

    }).catch(err => res.status(500).json({ err: err }));
}

exports.dislikeUserImage = (req, res) => {
    userImagesModel.findOne({ _id: req.params.imageId, userId: req.params.userId }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Image was not found!!!' });
        }

        likesModel.findOneAndDelete({ elemId: req.params.imageId, type: 'userImage', userId: req.userInfo._id }).then(result => {
            if (!result) {
                return res.status(404).json({ err: 'Like was not found!!!' });
            }

            return res.status(200).json({ message: 'Like was deleted succesfully' });
        }).catch(err => res.status(500).json({ err: err }));

    }).catch(err => res.status(500).json({ err: err }));
}