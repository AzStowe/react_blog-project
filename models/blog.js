var mongoose = require('mongoose')
var Schema = mongoose.Schema

var blogSchema = new Schema(
    {
        author: { type: String },
        post: { type: String },
        title: { type: String },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Blog', blogSchema)
