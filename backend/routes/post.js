const express = require('express');
const router = express.Router();
//const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postCtrl = require('../controllers/post');
const auth = require('../middlewares/auth');


//MESSAGES
router.post('/', multer, postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/all/:id', postCtrl.getUserPosts);
router.get('/:id', postCtrl.getOnePost);
router.delete('/:id', postCtrl.deletePost);
router.put('/:id', multer, postCtrl.modifyPost);


//COMMENTAIRES
router.post('/:id/comment', postCtrl.newComment);
router.get('/:id/comments', postCtrl.getAllComments);
router.delete('/comment/:id', postCtrl.deleteComment);

//LIKES
router.post('/:id/like', postCtrl.likeAPost);
//router.get('/:id/likes', postCtrl.getAllLikes);



module.exports = router;