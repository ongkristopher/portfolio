import React, { Component } from 'react'
import Projects from './Projects';

export default class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        const bio = this.state.displayBio ? (<div>
                <p>I live in Bulacan, and code every day.</p>
                <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                <p>Beside coding, I also love music and ramen!</p>
            </div>
            ) : null;

        return (
        <div>
            <h1>Hello!</h1>
            <p>My name is Kristopher. I'm a software engineer.</p>
            <p>I'm always looking forward to working on meaningful projects.</p>
            { bio }
            <button onClick={this.toggleDisplayBio}>{ !this.state.displayBio ? 'Read More' : 'Show Less'}</button>

            <hr />
            <Projects />
        </div>
        )
    }
}
