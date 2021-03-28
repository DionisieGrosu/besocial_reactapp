const mongoose = require('mongoose');
const { userModel } = require('../../models/userModels/userModel');
const { userDetailsModel } = require('../../models/userModels/userDetailsModel');
const { userImagesModel } = require('../../models/userModels/userImagesModel');
const { messagesModel } = require('../../models/messagesModels/messagesModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Busboy = require('busboy');
const os = require('os');
const fs = require('fs');
const path = require('path');

exports.signIn = (req, res) => {
    const userCredentials = {
        email: req.body.email,
        password: req.body.password
    }

    userModel.findOne({ email: userCredentials.email }).then(user => {
        if (!user) {
            return res.status(400).send('Wrong credenctials!!! Please try again!!!')
        }

        bcrypt.compare(userCredentials.password.trim(), user.password).then(result => {
            if (!result) return res.status(400).send("Wrong credentials!!! Please try again!!!");
            const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), data: user }, process.env.SECRET_KEY);
            return res.status(200).send(token);
        }).catch(err => res.status(500).send('Something went wrong!!!'))

        // if () {
        //     return res.status(400).send('Wrong credenctials!!!')
        // }

    }).catch(err => res.status(500).send("Something went wrong!!!"));


};

exports.signUp = (req, res) => {
    const userInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        comfirmPassword: req.body.comfirmPassword
    }


    if (userInfo.password.trim() !== userInfo.comfirmPassword.trim()) {
        return res.status(400).send('Password and comfirm password must be tha same!!!');
    }

    bcrypt.hash(userInfo.password, Number(process.env.BCRYPT_SALT), async function (err, hash) {

        if (err) return res.status(500).send("Something went wrong!!!");

        var session = await mongoose.startSession();
        session.startTransaction();
        userInfo.password = hash;



        try {

            await userModel.create([userInfo], { session: session });

        } catch (err) {
            if (err.code === 11000) {
                // session.abortTransaction();
                session.endSession();
                return res.status(400).send('User already exists!!!');
            }

            session.endSession();
            console.log(err);
            return res.status(500).send(err);

        }

        try {
            const userCheckCreated = await userModel.findOne({ email: userInfo.email }).session(session);
            if (!userCheckCreated) {
                await session.abortTransaction();
                session.endSession();
                return res.status(500).json({ message: 'Something went wrong!!!' });
            }
            var userDeteails = {
                userId: userCheckCreated._id,
                email: userCheckCreated.email
            }
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            console.log(err);
            return res.status(500).send('Something went wrong in userCheckCreated!!!');
        }




        try {
            await userDetailsModel.create([userDeteails], { session: session });
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            return res.status(500).send('Something went wrong in userDetails create!!!');
        }


        try {
            const checkUserDetailsCreated = await userDetailsModel.findOne({ userId: userDeteails.userId }).session(session);
            if (!checkUserDetailsCreated) {
                await session.abortTransaction();
                session.endSession();
                return res.status(500).json({ message: 'Something went wrong!!!' });
            }
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            return res.status(500).send('Something went wrong!!!!');

        }


        await session.commitTransaction();
        session.endSession();

        return res.status(201).send("User created succesfully!!!")

        // if (err) return res.status(500).send("Something went wrong!!!");

        // const session = await mongoose.startSession();
        // session.startTransaction();
        // userInfo.password = hash;

        // userModel.create([userInfo], { session: session }).then(user => {
        //     const userDeteails = {
        //         userId: result._id
        //     }
        //     if (!user) {
        //         session.abortTransaction();
        //         return res.status(500).send('Something went wrong!!!');
        //     }

        //     userDetailsModel.creater([userDeteails], { session: session }).then(userDetail => {
        //         if (!userDetail) {
        //             session.abortTransaction();
        //             return res.status(500).send('Something went wrong!!!');
        //         }

        //         session.commitTransaction();
        //         return res.status(201).send('User was created succesfully!!!')

        //     }).catch(err => {
        //         session.abortTransaction();
        //         return res.status(500).send('Something went wrong!!!');
        //     })

        //     session.endSession();

        // }).catch(err => {
        //     if (err.code === 11000) {
        //         return res.status(400).send('User already exists!!!');
        //     }
        //     session.endSession();
        //     return res.status(500).send("Something went wrong!!!!")
        // });


        // let checkUser = userModel.findOne({ email: userInfo.email });
        // if (!checkUser) {
        //     session.abortTransaction();
        //     return res.status(500).send('')
        // }
        // await userDetailsModel.creater(userDeteails, { session: session });

    });


};


exports.getUserDetails = (req, res) => {

    userDetailsModel.findOne({ userId: req.userInfo._id }).then(userDetail => {
        if (!userDetail) {
            return res.status(404).send("User info not found!!!");
        }

        return res.status(200).json(userDetail);
    }).catch(err => { return res.status(500).send("Something went wrong!!!") });



}


exports.getUserShortInfo = (req, res) => {
    if (req.params) {
        userDetailsModel.findOne({ userId: req.params.userId }).then(userDetail => {

            if (!userDetail) {
                return res.status(404).send("User info not found!!!");
            }
            const userShortInfo = {
                status: userDetail.status,
                avatar: userDetail.avatar,
                friends: userDetail.friends.lenght > 6 ? userDetail.friends.slice(5) : userDetail.friends,
                groups: userDetail.groups.lenght > 6 ? userDetail.groups.slice(5) : userDetail.groups
            };

            return res.status(200).json(userShortInfo);
        }).catch(err => { console.log(err); return res.status(500).send('Something went wrong!!!') });
    } else {
        return res.status(404).json({ message: 'Info not found!!!' });
    }

}



exports.getUserImages = (req, res) => {

    if (req.params) {
        userImagesModel.find({ userId: req.params.userId }, 'path').then(images => {

            if (!images) {
                return res.status(404).json({ message: "Could not find images!!!" })
            }

            return res.status(200).json(images);
        }).catch(err => res.status(404).json({ err: err }));
    }

}


exports.addUserImage = (req, res) => {
    if (req.method === 'POST') {
        var busboy = new Busboy({ headers: req.headers });
        const extArray = ['jpeg', 'png']
        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            const ext = filename.split('.')[filename.split('.').length - 1];
            if (extArray.includes(ext)) {
                filename = String(Math.floor(Math.random() * 1000000000));
                var saveTo = path.join(__dirname.substr(0, __dirname.indexOf('server') + 6) + '/userImagesUploads/', path.basename(filename) + '.' + ext);
                console.log(saveTo);
                file.pipe(fs.createWriteStream(saveTo));
            } else {
                return res.status(500).json({ message: 'Incorrect file!!!' })
            }


        });
        busboy.on('finish', function () {
            res.status(200).json({ message: 'Image was uploaded sucessfully!!!' });
        });
        return req.pipe(busboy);
        // console.log(__dirname.splice());
        // console.log(__dirname.substr(0, __dirname.indexOf('server') + 6))
    }
}

exports.getAllMessages = (req, res) => {

    messagesModel.find().where('senterId').equals(req.userInfo._id).and('recieverId').equals(req.params.userId).or('recieverId').equals(req.userInfo._id).and('senterId').equals(req.params.userId).then(result => {
        if (!result) {
            return res.status(404).json({ message: 'Message not found!!!' });
        }

        return res.status(200).json(result);
    }).catch(err => {
        return res.status(500).json({ err: err });
    })

}

exports.getLastMessages = (req, res) => {

}


exports.addMessage = (req, res) => {
    var messageData = {
        senterId: req.userInfo._id,
        uploadsFiles: [],
    }
    var busboy = new Busboy({ headers: req.headers });
    const extArray = ['jpg', 'png', 'txt'];

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

        messageData[fieldname] = val;
        // console.log(fieldname);
        // console.log(val);

        // return res.status(200).json({ message: "hello" });

    });

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        if (fieldname == 'attachment') {
            const ext = filename.split('.')[filename.split('.').length - 1];
            if (extArray.includes(ext)) {
                filename = String(Math.floor(Math.random() * 1000000000));
                var saveTo = path.join(__dirname.substr(0, __dirname.indexOf('server') + 6) + '/messagesUploadedFiles/', path.basename(filename) + '.' + ext);
                // console.log(saveTo);
                file.pipe(fs.createWriteStream(saveTo));
            } else {
                return res.status(500).json({ message: 'Incorrect file!!!' })
            }

            messageData.uploadsFiles.push(saveTo);

        } else {
            return res.status(500).json({ message: 'Something went wrong!!!' })
        }
    });
    busboy.on('error', function (err) {
        return res.status(500).json({ message: 'Something went wrong!!!' });
    });

    busboy.on('finish', function () {
        messagesModel.create(messageData).then(result => res.status(201).json({ message: 'Message was created succesfully!!!' })).catch(err => res.status(500).json({ message: 'Something went wrong!!!' }));
        return res.status(201).json(messageData);
    })
    return req.pipe(busboy);


    console.log(messageData)
        // messagesModel.create(messageData).then(result => res.status(201).json({ message: 'Message was created succesfully!!!' })).catch(err => res.status(500).json({ message: 'Something went wrong!!!' }));

}