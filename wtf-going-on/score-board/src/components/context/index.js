// import { render } from "@testing-library/react";
// import React from "react";

// const ScoreboardContext = React.createContext()
 
// export class Provider extends React.Component {

//     state = {
//         player: [
//           { name: "Sufail", score: 0, id: 1 },
//           { name: "Sanjaa", score: 0, id: 2 },
//           { name: "Sanchir", score: 0, id: 3 },
//           { name: "Sumail", score: 0, id: 4 },
//         ],
//       };
    
//       addPlayer = (e) => {
//         console.log("hi");
//         let a = this.state.player.length;
//         let b = this.state.player[a - 1].id + 1;
    
//         e.preventDefault();
//         let name = document.getElementById("abs").value;
//         this.setState((prevState) => {
//           return {
//             player: [...prevState.player, { name: name, score: 0, id: b }],
//           };
//         });
//         document.getElementById("abs").value = "";
//       };
    
//       removePlayer = (id) => {
//         this.setState((prevState) => {
//           return { player: prevState.player.filter((p) => p.id !== id) };
//         });
//       };
    
//       changeScore = (delta, index) => {
    
//         this.setState((prevState) => {
//           const updatedPlayers = [...prevState.player];
//           const updatedPlayer = {...updatedPlayers[index]};
//           updatedPlayer.score += delta;
//           updatedPlayers[index] = updatedPlayer;
//           return {
//             player: updatedPlayers,
//           };
//         });
    
//       };
//     render(){
//         return(
            
//         )
//     }
// }




// export const Provider = ScoreboardContext.Provider;
// export const Consumer = ScoreboardContext.Consumer;