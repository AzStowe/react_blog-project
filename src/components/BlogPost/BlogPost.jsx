import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

function BlogPost({ title, author, post, postId, handleDeletePost }) {
    return (
        <div className="b">
            <h3>{author}</h3>
            <h5>{title}</h5>
            <h6>{post}</h6>
            <Button
                type={'Delete'}
                handleDeletePost={handleDeletePost}
                postId={postId}
            />
        </div>
    )
}

export default BlogPost

BlogPost.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    post: PropTypes.string,
    handleDeletePost: PropTypes.func,
    postId: PropTypes.string,
}
