import React from "react";

class Stopwatch extends React.Component {
  state = {
    isRunning: false,
    // time: 0,
    elapsedTime: 0,
    previousTime: 0,
  };
  componentDidMount() {
    this.InvetervalID = setInterval(() => {
      this.tick();
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.InvetervalID);
  }
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime),
      }));
    }
  };
  //   tick = () => {
  //     if (this.state.isRunning) {
  //       this.setState((prevSate) => ({
  //         this: (prevSate.time += 1),
  //       }));
  //     }
  //   };
  //   HandleStopwatch = () => {
  //     this.setState((prevState) => ({
  //       isRunning: !prevState.isRunning,
  //     }));
  //   };

  HandleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now(),
      });
    }
  };

  ResetWatch = () => {
    this.setState(() => ({
      isRunning: false,
      //   time: 0,
      elapsedTime: 0,
    }));
  };

  render() {
    const millis = Math.floor(this.state.elapsedTime / 100);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{millis}</span>
        {/* <span className="stopwatch-time">{this.state.time}</span> */}
        <button onClick={this.HandleStopwatch}>
          {this.state.isRunning ? "stop" : "start"}
        </button>
        <button onClick={this.ResetWatch}>Reset</button>
      </div>
    );
  }
}
export default Stopwatch;


