import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = props => {
    let nav = props.user ? (
        <div className="topnav">
            <Link to="/" className="NavBar-link">
                HOME
            </Link>
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>
                LOG OUT
            </Link>
        </div>
    ) : (
        <div className="topnav">
            <Link to="/login" className="NavBar-link">
                LOG IN
            </Link>

            <Link to="/signup" className="NavBar-link">
                SIGN UP
            </Link>

            <Link to="/" className="NavBar-link">
                HOME
            </Link>

            <Link to="/about" className="NavBar-link">
                ABOUT
            </Link>
        </div>
    )

    return <div className="topnav">{nav}</div>
}

export default NavBar
