import React from "react";
// class Counter extends React.Component {
//   state = {
//     score: this.props.score,
//   };

//   incrementScore = () => {
//     this.setState((prevState) => ({ score: prevState.score + 1 }));
//   };

//   dicrementScore = () => {
//     this.setState((prevState) => ({ score: prevState.score - 1 }));
//   };

//   render() {
//     return (
//       <div className="counter">
//         <button
//           className="counter-action dicrement"
//           onClick={this.dicrementScore}
//         >
//           -
//         </button>
//         <span className="counter-score">{this.state.score}</span>
//         <button
//           className="counter-action increment"
//           onClick={this.incrementScore}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action dicrement" onClick={() => props.changeScore(-1, props.index)}>-</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(1, props.index)}>+</button>
    </div>
  );
}

export default Counter;
