const express = require('express');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../models/userModels/userModel');
const { AuthMiddleware } = require('../commons/commons');
const { signIn, signUp, getUserDetails, getUserShortInfo, getUserImages, addUserImage, getAllMessages, getLastMessages, addMessage, getUsersPosts, addPost } = require('../../controllers/user/userController');

const router = express.Router();

router.get('/details', AuthMiddleware, getUserDetails);
router.get('/shortInfo/:userId', getUserShortInfo);
router.get('/images/:userId', getUserImages);
router.get('/messages/lastMessage', AuthMiddleware, getLastMessages);
router.get('/messages/:userId', AuthMiddleware, getAllMessages);
router.get('/posts/:userId', AuthMiddleware, getUsersPosts);



router.post('/images', AuthMiddleware, addUserImage);
router.post('/message', AuthMiddleware, addMessage);
router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/post', AuthMiddleware, addPost);
// router.post('/info', AuthMiddleware, updateUserDetails);




module.exports = router;