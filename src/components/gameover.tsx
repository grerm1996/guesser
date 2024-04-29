import { useState } from "react";
import "./gameover.css";
import Replay from "@mui/icons-material/Replay";

function GameOver({ shuffledList, index, numberCorrect, returnToStart }) {
  return (
    <div className="gameover-screen">
      <div className="congrats">Congrats! You got {numberCorrect} correct:</div>
      <ul className="recap-list">
        {shuffledList.slice(0, index + 1).map((item) => (
          <li className={item.status} key={item.name}>
            {item.name} {item.status == "correct" ? <span>&#10003;</span> : ""}
          </li>
        ))}
      </ul>
      <button className="replay-button" onClick={returnToStart}>
        Play again? <Replay />
      </button>
    </div>
  );
}

export default GameOver;
