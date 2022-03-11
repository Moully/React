function Header(props) {
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
        <button onClick={() => props.removePlayer(props.id)} className="remove-player">✖</button>
        {props.name}
      </div>
      <Counter score={props.score} index={props.index} changeScore={props.changeScore}/>
    </div>
  );
}

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action dicrement" onClick={() => props.changeScore(-1, props.index)}>-</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(1, props.index)}>+</button>
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      { name: "Sufail", score: 12, id: 1 },
      { name: "Sanjaa", score: 22, id: 2 },
      { name: "Sanchir", score: 34, id: 3 },
      { name: "Sumail", score: 12, id: 4 },
    ],
  };

  changeScore = (delta, index) => {
    this.setState((prevState) => {
      console.log(prevState);
      const updatedPlayers = [...prevState.players];
      console.log(updatedPlayers);
      const updatedPlayer = {...updatedPlayers[index]};
      console.log(updatedPlayer);
      updatedPlayer.score += delta;

      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers,
      };
    });
  };

  removePlayer = (id) => {
    this.setState((prevState) => {
      return { player: prevState.players.filter((p) => p.id !== id) };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayer={this.state.players.length} />
        {this.state.players.map((player, i) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            index={i}
            removePlayer={this.removePlayer}
            changeScore={this.changeScore}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
