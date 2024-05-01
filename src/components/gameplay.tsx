import { useState, useEffect } from "react";
import "./gameplay.css";
import Timer from "./timer.tsx";

function GamePlay(props) {
  function clickPass() {
    props.setShuffledList((shuffledList) => [
      ...shuffledList,
      (shuffledList[props.index].status = "passed"),
    ]);
    props.setIndex((prevIndex) => prevIndex + 1);
  }

  function clickCorrect() {
    const audio = new Audio("public/ding.mp3");
    audio.play();
    props.setShuffledList((shuffledList) => [
      ...shuffledList,
      (shuffledList[props.index].status = "correct"),
    ]);
    props.setNumberCorrect((prevNum) => prevNum + 1);
    props.setIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <>
      <p className="display">{props.shuffledList[props.index].name}</p>
      <Timer
        setGameOver={props.setGameOver}
        gameStart={props.gameStart}
        setGameStart={props.setGameStart}
        timeLimit={props.timeLimit}
      />
      <div className="button-container">
        <button className="correct-button" onClick={() => clickCorrect()}>
          Got it
        </button>
        <button className="pass-button" onClick={clickPass}>
          Pass
        </button>
      </div>
    </>
  );
}

export default GamePlay;
