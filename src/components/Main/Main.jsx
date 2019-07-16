import React from 'react'
import './Main.css'
import Form from '../../components/Form/Form'
import BlogPost from '../../components/BlogPost/BlogPost'
import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import '../Button/Button.css'

class Main extends React.Component {
    state = {
        isPosting: false,
        posts: [],
    }

    componentDidMount() {
        getPosts()
            .then(results =>
                this.setState({
                    posts: results,
                })
            )
            .catch(error => console.error(error))
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
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title, author, post }),
        }

        console.log(options)
        async function createPost() {
            try {
                const sendPost = await fetch(
                    'http://localhost:3001/api/posts',
                    options
                )
                const postResult = await sendPost.json()
                return await postResult
            } catch (error) {
                console.log('line 39', error)
            }
        }

        createPost().then(result => {
            console.log(result)
            this.setState({
                posts: [{ ...result }, ...this.state.posts],
                isPosting: true,
            })
        })
    }

    handleDeletePost = async id => {
        if (this.state.posts.filter(elem => id === elem.id) === []) {
            throw new Error('Wrong item')
        }
        // First we delete the post from the database
        await deletePost(id)
            .then(results => console.log(results))
            .catch(error => console.error(error))

        // Then we get the new, updated list of posts from the database and apply it to state

        await getPosts()
            .then(results =>
                this.setState({
                    posts: results,
                })
            )
            .catch(error => console.error(error))
    }

    render() {
        const postsList = this.state.posts.map((post, index) => {
            return (
                <div className="b">
                    <BlogPost
                        key={index}
                        {...post}
                        handleDeletePost={this.handleDeletePost}
                        postId={post._id}
                    />
                </div>
            )
        })

        return (
            <div>
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />

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
                    {/* <ul>{postsList}</ul> */}
                    {postsList}
                </section>
            </div>
        )
    }
}

async function getPosts() {
    try {
        const fetchPosts = await fetch('http://localhost:3001/api/posts')
        const data = fetchPosts.json()
        return await data
    } catch (error) {
        console.log(error)
    }
}

async function deletePost(id) {
    const options = {
        method: 'DELETE',
    }
    try {
        const deletedPost = await fetch(
            `http://localhost:3001/api/posts/${id}`,
            options
        )
        const response = deletedPost.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

export default Main
