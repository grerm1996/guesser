import "./gameplay.css";
import { useState } from "react";
import Timer from "./timer.tsx";

function GamePlay(props: {
  setGameOver: (value: boolean) => void;
  gameStart: boolean;
  shuffledList: { name: string; status: string }[];
  setGameStart: (value: boolean) => void;
  setShuffledList: (value: { name: string; status: string }[]) => void;
  index: number;
  setIndex: (value: number) => void;
  numberCorrect: number;
  setNumberCorrect: (value: number) => void;
  timeLimit: number | "";
}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [isScrapped, setIsScrapped] = useState<boolean>(false);

  function clickPass() {
    if (isChecked || isScrapped) return;
    const audio = new Audio("./swoosh.mp3");
    audio.play();
    setIsScrapped(true);
    setTimeout(() => {
      setIsScrapped(false);
      props.setIndex(props.index + 1);
    }, 1000);
    const updatedList = [...props.shuffledList];
    updatedList[props.index].status = "passed";
    props.setShuffledList(updatedList);
  }

  function clickCorrect() {
    if (isChecked || isScrapped) return;
    console.log("ding!");
    const audio = new Audio("./ding.mp3");
    audio.play();
    setIsChecked(true);
    setTimeout(() => {
      setIsChecked(false);
      props.setIndex(props.index + 1);
    }, 2000);
    const updatedList = [...props.shuffledList];
    updatedList[props.index].status = "correct";
    props.setShuffledList(updatedList);

    props.setNumberCorrect(props.numberCorrect + 1);
  }

  return (
    <>
      <div className="display">
        <p
          className={`${isChecked ? "kaching" : ""}${
            isScrapped ? "scrapped" : ""
          }`}
        >
          {props.shuffledList[props.index].name}
        </p>
        <p className={`${isChecked ? "kaching" : ""} `}>
          {props.shuffledList[props.index + 1].name}
        </p>
      </div>
      <Timer
        setGameOver={props.setGameOver}
        gameStart={props.gameStart}
        setGameStart={props.setGameStart}
        timeLimit={props.timeLimit}
      />
      <div className="button-container">
        <button
          className="correct-button"
          onClick={() => clickCorrect()}
          disabled={isChecked || isScrapped}
        >
          Got it
        </button>
        <button
          className="pass-button"
          onClick={clickPass}
          disabled={isChecked || isScrapped}
        >
          Pass
        </button>
      </div>
    </>
  );
}

export default GamePlay;
