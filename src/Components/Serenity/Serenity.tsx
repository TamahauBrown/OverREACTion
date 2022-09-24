import React from 'react';
import '../../App.scss';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Serenity() {
    return (
        <div className="App">
            <Header/>
            <div className="App-body">
            Serenity!
            </div>
            <Footer/>
        </div>
    );
}