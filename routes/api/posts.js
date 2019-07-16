var express = require('express')
var router = express.Router()
var postsCtrl = require('../../controllers/posts')

router.get('/posts', postsCtrl.getAllPosts)
router.get('/posts/:id', postsCtrl.getOnePost)
router.post('/posts', postsCtrl.createPost)
router.delete('/posts/:id', postsCtrl.deletePost)

module.exports = router
