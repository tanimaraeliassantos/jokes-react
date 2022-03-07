import React, { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      {isShown && <button onClick={toggleShown}>Hide punchline</button>}
      {isShown && <button onClick={toggleShown}>Show punchline</button>}
      <hr />
    </div>
  );
}
