import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

export function Header() {
    return (
    <header className="App-header">
        <Link to="../" id="header-item"> Home </Link>

        <Dropdown>
            <Dropdown.Toggle variant="success" id="header-link">
                Worlds
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item><Link to='../aeryaan' id="header-item">Aeryaan</Link></Dropdown.Item>
            <Dropdown.Item><Link to='../serenity' id="header-item">Serenity</Link></Dropdown.Item>
            <Dropdown.Item><Link to='../kava' id="header-item">Kava</Link> </Dropdown.Item>
            <Dropdown.Item><Link to='../sol' id="header-item">Sol</Link></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <Link to='../DMNotes' id="header-item">DM Notes</Link>
    </header>
    )
}