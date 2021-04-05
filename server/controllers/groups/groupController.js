const mongoose = require('mongoose');
const { userModel } = require('../../models/userModels/userModel');
const { userDetailsModel } = require('../../models/userModels/userDetailsModel');
const { groupsModel } = require('../../models/groupsModels/groupsModel');
const { groupsPostsModel } = require('../../models/postsModels/groupsPosts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Busboy = require('busboy');
const os = require('os');
const fs = require('fs');
const path = require('path');


exports.createGroupe = (req, res) => {

    const groupData = {
        adminId: req.userInfo._id,
        groupeName: req.body.groupeName,
    }
    groupsModel.create(groupData).then(result => {
        if (!result) {
            return res.status(500).json({ err: err });
        }
        return res.stauts(201).json({ message: 'Group was created succsefully!!!' });
    }).catch(err => res.status(500).json({ err: err }));


}

exports.getOwnGroupes = (req, res) => {
    groupsModel.find({ author: req.userInfo._id }).then(result => {
        if (!result) {
            return res.status(404).json({ message: 'Group not found!!!' });
        }

        return res.status(200).json(result);
    }).catch(err => res.status(500).json({ err: err }));
}

exports.getSubscribedGroupes = (req, res) => {
    groupsModel.find({ subscribers: [req.userInfo._id] }).then(result => {
        if (!result) {
            return res.status(404).json({ err: err });
        }

        return res.status(200).json(result);
    }).catch(err => res.status(500).json({ err: err }));
}


exports.createPost = (req, res) => {
    groupsModel.findOne({ _id: req.params.groupeId }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Groupe not found!!!' })
        }
        const postData = {
            groupeId: result._id,
            uploadsFiles: [],
        }


        var busboy = new Busboy({ headers: req.headers });
        const extArray = ['jpg', 'png', 'gif'];

        busboy.on('field', function (fieldname, val) {
            // if (fieldname == 'attachment') {
            //     const ext = filename.split('.')[filename.split('.').length - 1];
            //     if (extArray.includes(ext)) {
            //         filename = String(Math.floor(Math.random() * 1000000000));
            //         var saveTo = path.join(__dirname.substr(0, __dirname.indexOf('server') + 6) + '/messagesUploadedFiles/', path.basename(filename) + '.' + ext);
            //         console.log(saveTo);
            //         file.pipe(fs.createWriteStream(saveTo));
            //     } else {
            //         return res.status(500).json({ message: 'Incorrect file!!!' })
            //     }

            //     messageData.uploadsFiles = saveTo;

            // } else {
            //     return res.status(500).json({ message: 'Something went wrong!!!' })
            // }

            postData[fieldname] = val;
            // console.log(fieldname);
            // console.log(val);

            // return res.status(200).json({ message: "hello" });

        });

        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            if (fieldname == 'attachment') {
                const ext = filename.split('.')[filename.split('.').length - 1];
                if (extArray.includes(ext)) {
                    filename = String(Math.floor(Math.random() * 1000000000));
                    var saveTo = path.join(__dirname.substr(0, __dirname.indexOf('server') + 6) + '/groupesPostsUploadesFiles/', path.basename(filename) + '.' + ext);
                    // console.log(saveTo);
                    file.pipe(fs.createWriteStream(saveTo));
                } else {
                    return res.status(500).json({ message: 'Incorrect file!!!' })
                }

                postData.uploadsFiles.push(saveTo);

            } else {
                return res.status(500).json({ message: 'Something went wrong!!!' })
            }
        });
        busboy.on('error', function (err) {
            return res.status(500).json({ message: 'Something went wrong!!!' });
        });

        busboy.on('finish', function () {
            groupsPostsModel.create(postData).then(result => res.status(201).json({ message: 'Post was created succesfully!!!' })).catch(err => res.status(500).json({ message: 'Something went wrong!!!' }));
            // return res.status(201).json(messageData);
        })
        return req.pipe(busboy);

    }).catch(err => res.stauts(500).json({ err: 'Something went wrong!!!' }));
}

exports.getPosts = (req, res) => {

    groupsPostsModel.find({ groupeId: req.params.groupeId }).then(result => {
        if (!result) {
            return res.status(404).json({ err: err });
        }

        return res.status(200).json(result);
    }).catch(err => res.status(500).json({ err: err }));

}

exports.getSubscribers = (req, res) => {
    groupsModel.find({ _id: req.params.groupeId }, 'subscribers').populate('subscribers').then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Groupe was not found' });
        }

        return res.status(200).json(result);
    }).catch(err => res.status(500).json({ err: err }));
}

exports.getGroupeInfo = (req, res) => {
    groupsModel.find({ _id: req.params.groupeId }).populate(['posts', 'subscribers', ]).then(result => {

        if (!result) {
            return res.status(404).json({ err: 'Groupe not found!!!' });
        }

        return res.status(200).json(result);
    }).catch(err => res.status(500).json({ err: err }));
}

exports.updatePost = (req, res) => {
    groupsModel.findOne({ _id: req.params.groupeId, adminId: req.userInfo._id }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Groupe was not found or you dont have permision for updating this post!!!' })
        }

        const updatedData = {
            body: req.body.body,
            updated: true,
        }

        var busboy = new Busboy({ headers: req.headers });
        const extArray = ['jpg', 'png', 'gif'];

        busboy.on('field', function (fieldname, val) {
            // if (fieldname == 'attachment') {
            //     const ext = filename.split('.')[filename.split('.').length - 1];
            //     if (extArray.includes(ext)) {
            //         filename = String(Math.floor(Math.random() * 1000000000));
            //         var saveTo = path.join(__dirname.substr(0, __dirname.indexOf('server') + 6) + '/messagesUploadedFiles/', path.basename(filename) + '.' + ext);
            //         console.log(saveTo);
            //         file.pipe(fs.createWriteStream(saveTo));
            //     } else {
            //         return res.status(500).json({ message: 'Incorrect file!!!' })
            //     }

            //     messageData.uploadsFiles = saveTo;

            // } else {
            //     return res.status(500).json({ message: 'Something went wrong!!!' })
            // }

            postData[fieldname] = val;
            // console.log(fieldname);
            // console.log(val);

            // return res.status(200).json({ message: "hello" });

        });

        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            if (fieldname == 'attachment') {
                const ext = filename.split('.')[filename.split('.').length - 1];
                if (extArray.includes(ext)) {
                    filename = String(Math.floor(Math.random() * 1000000000));
                    var saveTo = path.join(__dirname.substr(0, __dirname.indexOf('server') + 6) + '/groupesPostsUploadesFiles/', path.basename(filename) + '.' + ext);
                    // console.log(saveTo);
                    file.pipe(fs.createWriteStream(saveTo));
                } else {
                    return res.status(500).json({ message: 'Incorrect file!!!' })
                }

                postData.uploadsFiles = [];
                postData.uploadsFiles.push(saveTo);

            } else {
                return res.status(500).json({ message: 'Something went wrong!!!' })
            }
        });
        busboy.on('error', function (err) {
            return res.status(500).json({ message: 'Something went wrong!!!' });
        });

        busboy.on('finish', function () {
            groupsPostsModel.findOneAndUpdate({ _id: result._id }, postData).then(result => res.status(200).json({ message: 'Post was updated succesfully!!!' })).catch(err => res.status(500).json({ message: 'Something went wrong!!!' }));
            // return res.status(201).json(messageData);
        })

        return req.pipe(busboy);

        // groupsPostsModel.findOneAndUpdate({ _id: req.params.postId, groupeId: result._id }).then()
    }).catch(err => res.status(500).json({ err: err }));
}

exports.deletePost = (req, res) => {
    groupsModel.findOne({ _id: req.params.groupeId, adminId: req.userInfo._id }).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Groupe was not found or you dont have permision for updating this post!!!' })
        }

        groupsPostsModel.updateOne({ _id: req.params.postId, groupeId: req.params.groupeId }, { deleted: true }).then(result => {
            if (!result) {
                return res.status(500).json({ err: 'Something went wrong!!!' });
            }

            if (result.deleted === true) {
                return res.status(200).json({ message: 'Post was updated succesfully!!!' });
            }

            return res.status(500).json({ err: 'Something went wrong!!!' });
        }).catch(err => res.status(500).json({ err: 'Something went wrong!!!' }));
    }).catch(err => res.status(500).json({ err: err }));
}


exports.updateGroupe = (req, res) => {
    const groupeData = {
        groupeName: req.body.groupeName,
    }
    groupsModel.findAndUpdate({ _id: req.params.groupeId, adminId: req.userInfo._id }, groupeData).then(result => {
        if (!result) {
            return res.status(404).json({ err: 'Post was not found or you dont have permision for updating this post!!!' });
        }

        if (result.groupeName === req.body.groupeName) {
            return res.stauts(200).json({ message: 'Post was updated succesfully!!!' })
        }
        return res.status(500).json({ err: err });
    }).catch(err => res.status(500).json({ err: err }));
}


exports.deleteGroupe = (req, res) => {
    groupsModel.findOneAndDelete({ _id: req.params.groupeId, adminId: req.userInfo._id }).then(result => {
        return res.status(200).json({ message: 'Groupe was deleted succesfully!!!' });
    }).catch(err => res.status(500).json({ err: err }))
}

exports.subscribe = (req, res) => {
    groupsModel.updateOne({ _id: req.params.groupeId }, { $push: { subscribers: req.userInfo._id } }).then(result => {
        if (!result) {
            return res.status(500).json({ err: 'Something went wrong!!!' })
        }
        if (result.subscribers.filter(val => val === req.userInfo._id).lenght === 0) {
            return res.status(500).json({ err: 'Something went wrong!!!' });
        }

        return res.status(200).json({ message: 'You were subscribed successfully!!!' });
    }).catch(err => res.status(500).json({ err: err }));
}