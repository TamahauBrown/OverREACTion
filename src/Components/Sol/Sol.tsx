import React from 'react';
import '../../App.css';
import './Sol.css'
import {Header} from '../../GlobalElements/Header'
import {Footer} from "../../GlobalElements/Footer";

export function Sol() {
    return (
        <div className="App">
            <Header/>
            <body className="App-body">
            <div className="SolDescription">
                <div className="introduction"><h1>Sol</h1></div>
                <div className="description">
                    <h6>A long time ago or so the stories are mentioned, the power of magic ruled over the world of Sol.
                        The four elements known as the power harnessed by elementalists created the base of the world
                        that
                        humans harnessed to thrive and develop civilizations leading to prosperity or so it seemed...
                        Throughout
                        the course of time, man's dreams created untold strife, dreams of endless riches, eternal life
                        or
                        domination over all that lived... dreams of conquest and unfortunately... of war. The world
                        would have
                        been torn apart if not for a few brave and wise heroes who sealed the full extent of elemental
                        power away
                        in the Mt. Lunaris's, Luna Sanctum in the form of 4 elemental stars. Mt. Lunaris is located in
                        the city
                        of Solgaleo. Three years ago in the city of Solgaleo, an attempt was made to harness the power,
                        as an
                        attempt to steal the stars which caused untold destruction, fortunately the power was sealed
                        away but
                        many lost their parents in the disturbance.</h6>
                </div>
                <div>
                    <h2>Sanctum:</h2>
                    <br></br>
                    <img src={require("../../Images/RachelSing.jpg")} alt="Rachel Sing" className="character"></img>
                    <img src={require("../../Images/RockStone.jpg")} alt="Rock Stone" className="character"></img>
                    <img src={require("../../Images/Gandalf.jpg")} alt="Gandalf" className="character"></img>
                    <img src={require("../../Images/Onramov.png")} alt="Onramov" className="character"></img>
                    <img src={require("../../Images/Bates Mistress.jpg")} alt="Bates Mistress" className="character"></img>
                    <br></br>
                    <h3>Rachel Sing, Rock Stone, Gandalf, Onramov, Bates Mistress</h3>
                    <br></br>
                    <h2>Cultists' Revenge:</h2>
                    <img src="../../Images/" alt="" className="character"></img>
                    <img src="../../Images/" alt="" className="character"></img>
                    <img src="../../Images/" alt="" className="character"></img>
                    <img src="../../Images/" alt="" className="character"></img>
                    <img src="../../Images/" alt="" className="character"></img>
                    <br></br>
                    <h3>B'elanna, Du Sang Soldat, Pussy Kat, Lefrial, Thadius</h3>
                </div>
            </div>
            </body>
            <Footer/>
        </div>
    );
}