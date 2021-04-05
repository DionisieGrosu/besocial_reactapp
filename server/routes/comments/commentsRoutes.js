const express = require('express');
const { AuthMiddleware } = require('../commons/commons');
const { commentGroupePost, commentUserPost, deleteCommentGroupePost, deleteCommentUserPost, commentUserImage, deleteCommentUserImage } = require('../../controllers/comments/commentsController');

const router = express.Router();

router.post('/commentGroupePost/:postId', AuthMiddleware, commentGroupePost);
router.post('/commentUserPost/:postId', AuthMiddleware, commentUserPost);
router.post('/commentUserImage/:userId/:imageId', AuthMiddleware, commentUserImage);

router.delete('/deleteCommentGroupePost/:postId', AuthMiddleware, deleteCommentGroupePost);
router.delete('/deleteCommentUserPost/:postId', AuthMiddleware, deleteCommentUserPost);
router.delete('/deleteCommentUserImage/:userId/:imageId', AuthMiddleware, deleteCommentUserImage);

module.exports = router;