const express = require('express');
const router = express.Router();
//const auth = require('../middlewares/auth');
//const multer = require('../middlewares/multer-config');

const postCtrl = require('../controllers/post');
const auth = require('../middlewares/auth');


//MESSAGES
router.post('/', /*auth*/ postCtrl.createPost);
//router.get('/', /*auth*/ postCtrl.getAllPosts);
router.get('/:id', /*auth,*/ postCtrl.getOnePost);
//router.delete('/:id', auth, postCtrl.deleteOnePost);
//router.put('/:id', auth, postCtrl.modifyOnePost);
//router.get('/user:id/posts', auth, post.getUserPosts);

//COMMENTAIRES
//router.get('/:id/comments', auth, userCtrl.getAllComments);
//router.post('/:id/comment/', auth, userCtrl.newComment);
//router.delete('/comment/:id', auth, userCtrl.deleteComment);



module.exports = router;