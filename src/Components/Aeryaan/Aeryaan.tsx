import React from 'react';
import '../../App.scss';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Aeryaan() {
    return (
        <div className="App">
            <Header/>
            <body className="App-body">
            Welcome to Aeryaan!
            </body>
            <Footer/>
        </div>
    );
}