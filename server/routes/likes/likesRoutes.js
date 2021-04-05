const express = require('express');
const { AuthMiddleware } = require('../commons/commons');
const { likeGroupePost, likeUserPost, dislikeGroupePost, dislikeUserPost, likeUserImage, dislikeUserImage } = require('../../controllers/likes/likesController');

const router = express.Router();

router.post('/likeGroupePost/:postId', AuthMiddleware, likeGroupePost);
router.post('/likeUserPost/:postId', AuthMiddleware, likeUserPost);
router.post('/likeUserImage/:userId/:imageId', AuthMiddleware, likeUserImage);

router.delete('/dislikeGroupePost/:postId', AuthMiddleware, dislikeGroupePost);
router.delete('/dislikeUserPost/:postId', AuthMiddleware, dislikeUserPost);
router.delete('/dislikeUserImage/:userId/:imageId', AuthMiddleware, dislikeUserImage);

module.exports = router;