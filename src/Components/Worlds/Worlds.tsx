import React from 'react';
import '../../App.scss';
import './Worlds.scss'
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";
import {WorldNames} from "./World-Names/WorldNames";

export function Worlds() {
    return (
        <div className="App">
            <Header/>
            <div className="App-body">
            <div>
                <div id="world-title">
                    Welcome to my worlds!
                </div>
                <WorldNames/>
            </div>
            </div>
            <Footer/>
        </div>
    );
}