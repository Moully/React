function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">{props.totalPlayer}</span>
    </header>
  );
}

function Player(props){
  return(
    <div className="player">
      <div className="player"></div>
    </div>
  )
}






class App extends React.Component {
  
}


ReactDOM.render(<App />, document.getElementById("root"));
