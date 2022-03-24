import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";
import Addplayer from "./components/AddPlayer";
// import { Provider } from "./components/context/index.js";
// import Playerlist from "./components/Playerlist";
class App extends React.Component {
  state = {
    player: [
      { name: "Sufail", score: 0, id: 1 },
      { name: "Sanjaa", score: 0, id: 2 },
      { name: "Sanchir", score: 0, id: 3 },
      { name: "Sumail", score: 0, id: 4 },
    ],
  };


  addPlayer = (e) => {
    console.log("hi");
    let a = this.state.player.length;
    let b = this.state.player[a - 1].id + 1;

    e.preventDefault();
    let name = document.getElementById("abs").value;
    this.setState((prevState) => {
      return {
        player: [...prevState.player, { name: name, score: 0, id: b }],
      };
    });
    document.getElementById("abs").value = "";
  };

  removePlayer = (id) => {
    this.setState((prevState) => {
      return { player: prevState.player.filter((p) => p.id !== id) };
    });
  };


  // incrementScore = (id) => {
  //   this.setState((prevState) => {
  //     const updateScore = [...prevState.player]
  //     console.log(updateScore);
      
  //     return{
  //      player:[...prevState.player] 
  //     }});
  // };
  // dicrementScore = (score) => {
  //   this.setState((prevState) => ({ score: prevState.score - 1 }));
  // };

  changeScore = (delta, index) => {

    this.setState((prevState) => {
      const updatedPlayers = [...prevState.player];
      const updatedPlayer = {...updatedPlayers[index]};
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;
      return {
        player: updatedPlayers,
      };
    });
  };

  editName = (name, index) => {

    this.setState((prevState) => {
      const updatedPlayers = [...prevState.player];
      const updatedPlayer = {...updatedPlayers[index]};
      updatedPlayer.name = name;
      updatedPlayers[index] = updatedPlayer;
      return {
        player: updatedPlayers,
      };
    });
  };

  render() {
    const maxScore = Math.max(...this.state.player.map(e=>e.score))
    return (
      <div className="scoreboard">
        <Header
          title="scoreboard"
          totalPlayer={this.state.player.length}
          totalScore={this.state.player}
        />
        {this.state.player.map((player, index) => (
          <Player
            maxScore={maxScore}
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            index={index}
            removePlayer={this.removePlayer}
            changeScore={this.changeScore}
            editName={this.editName}
          />
        ))}
        <Addplayer function={this.addPlayer} />
      </div>
    );
  }
}

export default App;
