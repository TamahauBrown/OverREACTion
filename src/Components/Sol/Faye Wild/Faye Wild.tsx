import React from "react";
import '../../../App.scss';
import '../Sol.scss'

export function FayeWild() {
    return (

        <span>
        <h2 className="campaign">Mysteries of the Faye Wild:</h2>
        <img src={require("../../../Images/Belanna.jpg")} alt="B'elanna" className="character"></img>
        <img src={require("../../../Images/DuSang.jpg")} alt="Du Sang Soldat" className="character"></img>
        <img src={require("../../../Images/PussyKat.jpg")} alt="Pussy Kat" className="character"></img>
        <img src={require("../../../Images/Lefrial.png")} alt="Lefrial" className="character"></img>
        <img src={require("../../../Images/Thadius.jpg")} alt="Thadius" className="character"></img>
        <br></br>
        <h3 className="character-list">
            <span className="character-name">B'elanna,</span>
            <span className="character-name">Du Sang Soldat,</span>
            <span className="character-name">Pussy Kat,</span>
            <span className="character-name">Lefrial, </span>
            <span className="character-name">Thadius</span>
        </h3>

            Notes:
            Met Saturos at his house and the cavern north
Saved the family of spiders
Met the fairies
Was told about the red glowing rock and not to give to Saturos or the fairies, currently held by Pussy Kat
Lefrial tried to chop down Pussy Kat and Thadius' Home
In order to get a ship, they must steal the power source from Saturos
        </span>
    )
}