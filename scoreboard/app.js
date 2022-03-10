// const player = [
//   { name: "Sufail", score: 12, id: 1 },
//   { name: "Sanjaa", score: 22, id: 2 },
//   { name: "Sanchir", score: 34, id: 3 },
//   { name: "Sumail", score: 12, id: 4 },
// ];
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats"> {props.totalPlayer}</span>
    </header>
  );
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <button
          onClick={() => props.removePlayer(props.id)}
          className="remove-player"
        >
          ✖
        </button>
        {props.name}
      </div>
      <Counter score={props.score} />
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0,
  };
  //   incrementScore = () => {
  //     this.setState({
  //       score: this.state.score + 1,
  //     });
  //   };
  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  //   dicrementScore = () => {
  //     this.setState({
  //       score: this.state.score - 1,
  //     });
  //   };
  dicrementScore = () => {
    this.setState((prevState) => ({ score: prevState.score - 1 }));
  };
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action dicrement"
          onClick={this.dicrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    player: [
      { name: "Sufail", score: 12, id: 1 },
      { name: "Sanjaa", score: 22, id: 2 },
      { name: "Sanchir", score: 34, id: 3 },
      { name: "Sumail", score: 12, id: 4 },
    ],
  };

  removePlayer = (id) => {
    this.setState((prevState) => {
      return { player: prevState.player.filter((p) => p.id !== id) };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayer={this.state.player.length} />
        {this.state.player.map((player) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            removePlayer={this.removePlayer}
          />
        ))}
      </div>
    );
  }
}

// const App = (props) => {
//   return (
//     <div className="scoreboard">
//       <Header title="Scoreboard" totalPlayer={player.length} />
//       {props.gamePlayers.map((player) => (
//         <Player name={player.name} score={player.score} key={player.id} />
//       ))}
//     </div>
//   );
// };

// ReactDOM.render(<App gamePlayers={player} />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
