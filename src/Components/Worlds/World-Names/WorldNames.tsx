import {Link} from "react-router-dom";
import React from "react";

export function WorldNames() {
    return (
        <div id="world-item">
            <Link to='../aeryaan' id="world-name">Aeryaan</Link> - The land of the elves and psijic
            <br></br>
            <Link to='../serenity' id="world-name">Serenity</Link> - The land of time and space
            <br></br>
            <Link to='../kava' id="world-name">Kava</Link> - The land of the thrones
            <br></br>
            <Link to='../sol' id="world-name">Sol</Link> - The land of the elementals
        </div>
    )
}