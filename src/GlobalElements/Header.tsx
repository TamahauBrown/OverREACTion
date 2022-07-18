import React, {useEffect} from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Header() {
    useEffect(() => {
        document.title = 'OverReaction';
    });
    return (
    <header className="App-header">
        <Link to="../" id="header-item"> Home </Link>
        <Link to="../Worlds" id="header-item"> Worlds </Link>
        <Link to='../DMNotes' id="header-item">DM Notes</Link>
    </header>
    )
}