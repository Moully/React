import React from "react";
import Counter from "./Counter";

function Table (props){
    return(
        <div>
        <table className="player">
            <tbody>
            <tr>
                <th className="player-name">
                    <button onClick={() => props.removePlayer(props.id)}className="remove-player">✖</button>
                    {props.name}
                </th>
                <th><Counter score={props.score} /></th>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Table