import React from "react";

function Addplayer(props) {
  return (
    <form onSubmit={props.function}>
      <input
        autoComplete="off"
        type="text"
        placeholder="add new player"
        id="abs"
      />
      <input type="submit" value={"add new player"} />
    </form>
  );
}

export default Addplayer;
