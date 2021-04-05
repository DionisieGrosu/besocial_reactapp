const express = require('express');
const { AuthMiddleware } = require('../commons/commons');
const { createGroupe, getSubscribedGroupes, getOwnGroupes, createPost, getPosts, getSubscribers, getGroupeInfo, updatePost, deletePost, updateGroupe, deleteGroupe, subscribe } = require('../../controllers/groups/groupController');

const router = express.Router();

router.get('/getSubscribedGroups/:userId', AuthMiddleware, getSubscribedGroupes);
router.get('/getOwnGroupes', AuthMiddleware, getOwnGroupes);
router.get('/getPosts/:groupeId', AuthMiddleware, getPosts);
router.get('/subscribers/:groupeId', AuthMiddleware, getSubscribers);
router.get('/getGroupeInfo/:groupeId', AuthMiddleware, getGroupeInfo);

router.post('/createGroupe', AuthMiddleware, createGroupe);
router.post('/subscribe/:groupeId', AuthMiddleware, subscribe);
router.post('/createPost/:groupeId', AuthMiddleware, createPost);

router.patch('/updateGroupe/:groupeId', AuthMiddleware, updateGroupe);
router.patch('/updatePost/:groupeId/:postId', AuthMiddleware, updatePost);

router.delete('/deleteGroupe/:groupeId', AuthMiddleware, deleteGroupe);
router.delete('/deletePost/:groupeId/:postId', AuthMiddleware, deletePost);



module.exports = router;