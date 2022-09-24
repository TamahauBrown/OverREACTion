import React, {useEffect} from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import {Container, Navbar} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
    useEffect(() => {
        document.title = 'OverReaction';
    });
    return (
        <header className="App-header">
            <Link to="../" className="header-item" id="homeHeader"> Home </Link>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example"/>
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                className="header-item"
                                title="Worlds"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="../worlds">Overview</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item><Link to='../aeryaan' className="world-name">Aeryaan</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='../serenity' className="world-name">Serenity</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='../kava' className="world-name">Kava</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='../sol' className="world-name">Sol</Link> </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Link to='../DMNotes' className="header-item" id="dmNotesHeader">DM Notes</Link>


        </header>


)
}