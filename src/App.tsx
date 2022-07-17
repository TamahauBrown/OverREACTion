import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <Link to="home"> Homes </Link>
        <Link to='aeryaan'>Aeryaan</Link>
        <Link to='serenity'>Serenity</Link>
        <Link to='sol'>Sol</Link>
        <Link to='DMNotes'>DM Notes</Link>
      </header>
    </div>
  );
}

export default App;
