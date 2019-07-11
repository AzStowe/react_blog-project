import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Main from '../../components/Main/Main'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import ProtectedRoute from '../LoginPage/ProtectedRoute'
import BlogPost from '../../components/BlogPost/BlogPost'
import AboutPage from '../AboutPage/AboutPage'

export default class App extends Component {
    state = {
        isLoggedIn: false,
    }

    handleLogin = () => {
        this.setState({ isLoggedIn: true })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Main />} />
                    <Route exact path="/about" render={() => <AboutPage />} />
                    <Route
                        exact
                        path="/signup"
                        render={({ history }) => (
                            <SignupPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/login"
                        render={({ history }) => (
                            <LoginPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                </Switch>
            </div>
        )
    }
}
