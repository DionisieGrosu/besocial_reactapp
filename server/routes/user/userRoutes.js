const express = require('express');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../models/userModels/userModel');
const { signIn, signUp, getUserDetails, getUserShortInfo, getUserImages, addUserImage, getAllMessages, getLastMessages, addMessage } = require('../../controllers/user/userController');

const router = express.Router();

function AuthMiddleware(req, res, next) {
    let userInfo = {}
    if (req.headers.authorization && req.headers.authorization.split(" ")[1]) {
        jwt.verify(req.headers.authorization.split(" ")[1], process.env.SECRET_KEY, function (err, decoded) {
            if (err) return res.status(401).send("Unauthorized!");
            // console.log(decoded)
            if (decoded !== undefined && decoded.data !== undefined && decoded.data.email !== undefined) {

                userModel.findOne({ email: decoded.data.email.trim() }).then(user => {
                    if (!user) {
                        return res.status(401).send('Unauthorized!');
                    }

                    req.userInfo = user;
                    next();
                }).catch(err => res.status(401).send('Unauthorized!'));


            } else {
                res.status(401).send('Unauthorized!');
            }
        })
    } else {
        return res.status(500).send('Something went wrong!!!');
    }

}

router.get('/details', AuthMiddleware, getUserDetails);
router.get('/shortInfo/:userId', getUserShortInfo);
router.get('/images/:userId', getUserImages);
router.get('/messages/lastMessage', AuthMiddleware, getLastMessages);
router.get('/messages/:userId', AuthMiddleware, getAllMessages);
router.post('/images', AuthMiddleware, addUserImage);
router.post('/message', AuthMiddleware, addMessage);

router.post('/signin', signIn);
router.post('/signup', signUp);
// router.post('/info', AuthMiddleware, updateUserDetails);




module.exports = router;