import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <div>
            <h1>About</h1>
            <h3>
                This is the about page where I tell you all about what we are
                about. The reason for this blog. etc... So sit back, relax, and
                enjoy the blog. :O Or just go
                <Link to="/"> Home</Link>
            </h3>
        </div>
    )
}

export default AboutPage
