import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Header() {
    return (
    <header className="App-header">
        <Link to="../" id="header-item"> Home </Link>

        <DropdownButton id="header-link" title="Worlds">
            <Dropdown.Item><Link to='../aeryaan' id="header-item">Aeryaan</Link></Dropdown.Item>
            <Dropdown.Item><Link to='../serenity' id="header-item">Serenity</Link></Dropdown.Item>
            <Dropdown.Item><Link to='../kava' id="header-item">Kava</Link> </Dropdown.Item>
            <Dropdown.Item><Link to='../sol' id="header-item">Sol</Link></Dropdown.Item>
        </DropdownButton>

        <Link to='../DMNotes' id="header-item">DM Notes</Link>
    </header>
    )
}