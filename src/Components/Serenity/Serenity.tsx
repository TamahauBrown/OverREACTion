import React from 'react';
import '../../App.scss';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Serenity() {
    return (
        <div className="App">
            <Header/>
            <body className="App-body">
            Serenity!
            </body>
            <Footer/>
        </div>
    );
}