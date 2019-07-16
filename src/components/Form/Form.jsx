import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
    state = {
        title: '',
        author: '',
        post: '',
    }

    handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleAddPost(this.state)
        this.setState({
            title: '',
            author: '',
            post: '',
        })
    }

    render() {
        return (
            <div className="container">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="six columns">
                            <h3>Title</h3>
                            <input
                                className="u-full-width"
                                onChange={this.handleChange}
                                name="title"
                                value={this.state.title}
                            />
                        </div>
                        <div className="six columns">
                            <h3>Author</h3>
                            <input
                                className="u-full-width"
                                onChange={this.handleChange}
                                name="author"
                                value={this.state.author}
                            />
                        </div>
                    </div>
                    <div>
                        <h3>Post</h3>
                        <textarea
                            className="u-full-width"
                            onChange={this.handleChange}
                            name="post"
                            value={this.state.post}
                        />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    handleAddPost: PropTypes.func,
}
