import React from "react";
import Stopwatch from "./stopwatch";
function Header(props) {
  // const totalPlayer = props.player.length;
  // const totalPoints = props.player.reduce((total, player)=>{
  //   return total + player.score
  // })
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats"> {props.totalPlayer}</span>
      <Stopwatch />
    </header>
  );
}

export default Header;
