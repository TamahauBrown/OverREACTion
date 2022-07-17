import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, NavLink} from 'react-router-dom'

function Sol() {
    return (
        <div className="App">
        <header className="App-header">
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
        >
        Learn React
    </a>
    </header>
    <body>
    <Link to="/"> Home </Link>
        </body>
        <footer>

        </footer>
        </div>
);
}