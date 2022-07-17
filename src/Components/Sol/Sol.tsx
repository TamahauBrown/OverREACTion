import React from 'react';
import '../../App.css';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Sol() {
    return (
        <div className="App">
            <Header/>
            <body className="App-body">
            Welcome to Sol!
            </body>
            <Footer/>
        </div>
    );
}