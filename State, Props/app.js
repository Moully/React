function Header(props) {
  return (
    <div className="scoreboard">
      <header>{props.title}</header>
      <span>{props.totalPlayer}</span>
    </div>
  );
}

class Counter extends React.Component {
  //   state = {
  //     score: 0,
  //   };

  render() {
    return (
      <div className="counter">
        <button className="counter-action dicrement">-</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action dicrement">+</button>
      </div>
    );
  }
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <Counter score={props.score} />
    </div>
  );
}

class App extends React.Component {
  state = {
    player: [
      { name: "qwer", score: 10, id: 1 },
      { name: "qwer", score: 12, id: 2 },
      { name: "qwer", score: 10, id: 3 },
      { name: "qwer", score: 10, id: 4 },
      { name: "qwer", score: 10, id: 5 },
    ],
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayer={this.state.player.length} />;
        {this.state.player.map((player) => {
          return (
            <Player name={player.name} key={player.id} score={player.score} />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
