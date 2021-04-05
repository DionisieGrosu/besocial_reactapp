const commentsModel = require('../../models/commentsModels/commentsModel');
const { groupsModel } = require('../../models/groupsModels/groupsModel');
const { groupsPostsModel } = require('../../models/postsModels/groupsPosts');
const { usersPostsModel } = require('../../models/postsModels/usersPosts');
const { userImagesModel } = require('../../models/userModels/userImagesModel');

exports.commentGroupePost = (req, res) => {

    groupsPostsModel.findOne({ _id: req.params.postId }, '_id').then(result => {
        if (!result) {
            return res.status(404).json({ err: err });
        }

        const commentData = {
            userId: req.userInfo._id,
            elemId: result._id,
            type: 'groupePost',
            body: req.body.comment,
        }

        commentsModel.create(commentData).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }

            return res.status(201).json({ message: 'Comment was created successfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));
    })

}

exports.commentUserPost = (req, res) => {

    usersPostsModel.findOne({ _id: req.params.postId }, '_id').then(result => {
        if (!result) {
            return res.status(404).json({ err: err });
        }

        const commentData = {
            userId: req.userInfo._id,
            elemId: result._id,
            type: 'userPost',
            body: req.body.comment,
        }

        commentsModel.create(commentData).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }

            return res.status(201).json({ message: 'Comment was created successfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));
    })
}

exports.commentUserImage = (req, res) => {
    userImagesModel.findOne({ _id: req.params.postId }, '_id').then(result => {
        if (!result) {
            return res.status(404).json({ err: err });
        }

        const commentData = {
            userId: req.userInfo._id,
            elemId: result._id,
            type: 'userPost',
            body: req.body.comment,
        }

        commentsModel.create(commentData).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }

            return res.status(201).json({ message: 'Comment was created successfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));
    })
}


exports.deleteCommentGroupePost = (req, res) => {
    groupsPostsModel.findOne({ _id: req.params.postId }, '_id').then(result => {
        if (!result) {
            return res.status(404).json({ err: err });
        }


        groupsModel.findOne({ groupeId: result.groupeId, adminId: req.userInfo._id }).then(result => {

            if (!result) {
                return res.status(404).json({ err: 'Groupe dont found or you dont have permission to update groupe or posts of groupe!!!' })
            }

            commentsModel.findOneAndDelete({ elemId: req.params.postId }).then(result => {
                if (!result) {
                    return res.status(500).json({ err: 'Something went wrong!!!' });
                }

                return res.status(200).json({ message: 'Comment was deleted successfully!!!' });
            }).catch(err => res.status(500).json({ err: err }));

        }).catch(err => res.status(500).json({ err: err }));

    })
}

exports.deleteCommentUserPost = (req, res) => {

    usersPostsModel.findOne({ _id: req.params.postId, author: req.userInfo._id }, '_id').then(result => {
        if (!result) {
            return res.status(404).json({ err: 'You dont have permission!!!' });
        }

        commentsModel.findOneAndDelete({ elemId: req.params.postId }).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }

            return res.status(200).json({ message: 'Comment was deleted successfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));

    }).catch(err => res.status(500).json({ err: err }));
}


exports.deleteCommentUserImage = (req, res) => {

    userImagesModel.findOne({ _id: req.params.postId, author: req.userInfo._id }, '_id').then(result => {
        if (!result) {
            return res.status(404).json({ err: 'You dont have permission!!!' });
        }

        commentsModel.findOneAndDelete({ elemId: req.params.postId }).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }

            return res.status(200).json({ message: 'Comment was deleted successfully!!!' });
        }).catch(err => res.status(500).json({ err: err }));

    }).catch(err => res.status(500).json({ err: err }));
}