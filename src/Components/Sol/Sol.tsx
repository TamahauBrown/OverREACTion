import React from 'react';
import '../../App.scss';
import './Sol.scss'
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";
import {SolDescription} from "./Description/Sol-Description";
import {ElementalStars} from "./ElementalStars/ElementalStars";
import {FayeWild} from "./Faye Wild/Faye Wild";

export function Sol() {
    return (
        <div className="App">
            <Header/>
            <div className="App-body">
            <div className="SolDescription">
                <h1 className="introduction">Sol</h1>
                <SolDescription />
            </div>
            </div>
            <Footer/>
        </div>
    );
}