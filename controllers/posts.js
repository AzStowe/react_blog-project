const Post = require('../models/blog')

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost,
}

function deletePost(req, res) {
    console.log('Called delete post in controller')
    Post.findByIdAndRemove(req.params.id)
        .then(function(post) {
            res.status(200).json(post)
        })
        .catch(err => console.log(err))
}

function getOnePost(req, res) {
    Post.findById(req.params.id).then(function(post) {
        res.status(200).json(post)
    })
}

function createPost(req, res) {
    Post.create(req.body).then(function(post) {
        res.status(201).json(post)
    })
}

function getAllPosts(req, res) {
    Post.find({}).then(function(posts) {
        res.status(200).json(posts)
    })
}
