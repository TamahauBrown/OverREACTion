import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";

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
        <a href="/Components"> Homes </a>
        <a href='/Components/Aeryaan/Aeryaan'>Aeryaan</a>
        <a href='/Components/Serenity/Serenity'>Serenity</a>
        <a href='/Components/Sol/Sol'>Sol</a>
        <a href='/Components/DM Notes/DM Notes'>DM Notes</a>
      </header>
    </div>
  );
}

export default App;
