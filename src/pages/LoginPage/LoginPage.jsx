import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import userService from '../../utils/userService'

class LoginPage extends Component {
    state = {
        email: '',
        pw: '',
    }

    handleChange = e => {
        this.setState({
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            await userService.login(this.state)
            // Let <App> know a user has signed up!
            this.props.handleSignupOrLogin()
            // Successfully signed up - show GamePage
            this.props.history.push('/')
        } catch (err) {
            // Use a modal or toast in your apps instead of alert
            alert('Invalid Credentials!')
        }
    }

    render() {
        return (
            <div className="login">
                <h1>Log in</h1>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.pw}
                                name="pw"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-primary btn-block btn-large">
                                Log In
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <Link
                                to="/signup"
                                className="btn btn-primary btn-block btn-large"
                            >
                                Sign up
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link
                                to="/"
                                className="btn btn-primary btn-block btn-large"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage
