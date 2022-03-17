import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";
import Addplayer from "./components/AddPlayer";
class App extends React.Component {
  state = {
    player: [
      { name: "Sufail", score: 12, id: 1 },
      { name: "Sanjaa", score: 22, id: 2 },
      { name: "Sanchir", score: 34, id: 3 },
      { name: "Sumail", score: 12, id: 4 },
    ],
  };

  sortplayer = () =>{
    const obj = this.player
    obj.sort((a,b)=>(a.score > b.score) ? 1 : -1)
    console.log(obj);
  }


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

  // giveCrown = () => {
  //   return "is-high-score";
  // };

  incrementScore = (score) => {
    this.setState((prevState) => ({ score: prevState.score + 1 }));
  };
  dicrementScore = (score) => {
    this.setState((prevState) => ({ score: prevState.score - 1 }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="scoreboard"
          totalPlayer={this.state.player.length}
          totalScore={this.state.player}
        />
        {this.state.player.map((player) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            giveCrown={this.giveCrown}
            id={player.id}
            removePlayer={this.removePlayer}
            sortplayer={this.sortplayer}
          />
        ))}
        <Addplayer function={this.addPlayer} />
      </div>
    );
  }
}

export default App;
