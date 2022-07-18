import React from 'react';
import '../../App.scss';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function DMNotes() {
    return (
        <div className="App">
            <Header/>
            <body className="App-body">
            Welcome to DM Notes!
            </body>
            <Footer/>
        </div>
    );
}