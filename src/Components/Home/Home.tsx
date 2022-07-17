import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, NavLink} from 'react-router-dom'

function Home() {
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
        Welcome to the home page
    </a>
    </header>
        </div>
);
}