import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom'

export function Serenity() {
    return (
        <div className="App">
        <header className="App-header">
            Welcome to Serenity

            <Link to="home"> Homes </Link>
            <Link to='aeryaan'>Aeryaan</Link>
            <Link to='serenity'>aSerenity</Link>
            <Link to='sol'>Sol</Link>
            <Link to='DMNotes'>DM Notes</Link>
    </header>
    <body>
        </body>
        <footer>

        </footer>
        </div>
);
}