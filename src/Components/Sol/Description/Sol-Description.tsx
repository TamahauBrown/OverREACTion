import React from "react";
import '../../../App.scss';
import '../Sol.scss'

export function SolDescription() {
    return (
        <div className="description">
            <img src={require("../../../Images/SolMap.png")} alt="The map of sol" className="map"></img>
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

            Gods:
            Water: Nereid
            Earth: Ramses
            Fire: Timat
            Air: Atalanta
            Moon: Luna
        </div>
    )
}