import React, { Component } from 'react'
import Form from '../Form/Form'
import BlogPost from '../BlogPost/BlogPost'
import Button from '../Button/Button'
import NavBar from '../NavBar/NavBar'

export default class Main extends Component {
    state = {
        isPosting: false,
        post: [],
    }

    componentDidMount() {
        getPosts().then(results =>
            this.setState({
                posts: results,
            })
        )
    }

    handleClick = event => {
        this.setState({
            isPosting: !this.state.isPosting,
        })
    }

    handleAddPost = ({ title, author, post }) => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'applicatin-json',
            },
            body: JSON.stringify({ title, author, post }),
        }

        async function createPost() {
            try {
                const sendPost = await fetch(
                    'http://localhost:3001/api/post',
                    options
                )
                const postResult = await sendPost.json()
                return await postResult
            } catch (error) {
                console.log('line 39', error)
            }
        }

        createPost().then(result => {
            this.setState({
                post: [{ result }, ...this.state.post],
            })
        })
    }

    handleDeletePost = postIdx => {
        const newStateArray = this.state.post.filter(
            (elem, idx) => idx !== postIdx
        )

        this.setState({ post: newStateArray })
    }

    render() {
        const posts = this.state.post.map((post, index) => {
            return (
                <BlogPost
                    key={index}
                    {...post}
                    handleDeletePost={this.handleDeletePost}
                    index={index}
                />
            )
        })

        return (
            <div>
                <NavBar />
                <header>
                    <h1>Blog</h1>
                </header>
                <section>
                    <Button
                        handleClick={this.handleClick}
                        type={'Add New Post'}
                    />
                    {!!this.state.isPosting ? (
                        <Form handleAddPost={this.handleAddPost} />
                    ) : null}
                    <ul>{posts}</ul>
                </section>
            </div>
        )
    }
}

async function getPosts() {
    try {
        const fetchPosts = await fetch('http://localhost:8000/api/posts')
        const data = fetchPosts.json()
        return await data
    } catch (error) {
        console.log(error)
    }
}
