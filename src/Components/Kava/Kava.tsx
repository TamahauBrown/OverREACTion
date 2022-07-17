import React from 'react';
import '../../App.css';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Kava() {
    return (
        <div className="App">
            <Header/>
            <body className="App-body">
            Welcome to Kava!
            </body>
            <Footer/>
        </div>
    );
}