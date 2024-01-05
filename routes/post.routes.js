const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.post('/post', postController.createPost);
router.get('/post', postController.getPosts);
router.get('/post/:id', postController.getOnePost); // Added forward slash before 'post/:id'
router.put('/post', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;
