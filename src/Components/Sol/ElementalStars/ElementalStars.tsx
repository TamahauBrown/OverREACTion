import React from "react";
import '../../../App.scss';
import '../Sol.scss'

export function ElementalStars() {
    return (
        <span>
            <h2 className="campaign">Elemental Stars:</h2>
            <br></br>
            <img src={require("../../../Images/RachelSing.jpg")} alt="Rachel Sing" className="character"></img>
            <img src={require("../../../Images/RockStone.jpg")} alt="Rock Stone" className="character"></img>
            <img src={require("../../../Images/Gandalf.jpg")} alt="Gandalf" className="character"></img>
            <img src={require("../../../Images/Onramov.png")} alt="Onramov" className="character"></img>
            <img src={require("../../../Images/Bates Mistress.jpg")} alt="Bates Mistress" className="character"></img>
            <br></br>
            <h3 className="character-list">
                <span className="character-name"> Rachel Sing,</span>
                <span className="character-name"> Rock Stone, </span>
                <span className="character-name"> Gandalf, </span>
                <span className="character-name"> Onramov, </span>
                <span className="character-name"> Bates Mistress </span>
            </h3>
            <br></br>
        </span>
    )
}
