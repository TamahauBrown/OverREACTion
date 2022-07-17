import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

export function Header() {
    return (
    <header className="App-header">
        <Link to="../" id="header-item"> Home </Link>
        <Link to='../aeryaan' id="header-item">Aeryaan</Link>
        <Link to='../serenity' id="header-item">Serenity</Link>
        <Link to='../kava' id="header-item">Kava</Link>
        <Link to='../sol' id="header-item">Sol</Link>
        <Link to='../DMNotes' id="header-item">DM Notes</Link>
    </header>
    )
}