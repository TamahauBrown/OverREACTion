import React from 'react';
import '../../App.scss';
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Aeryaan() {
    return (
        <div className="App">
            <Header/>
            <div className="App-body">
            Welcome to Aeryaan!
            </div>
            <Footer/>
        </div>
    );
}