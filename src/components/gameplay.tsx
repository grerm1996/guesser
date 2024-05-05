import "./gameplay.css";
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
  timeLimit: number;
}) {
  function clickPass() {
    const updatedList = [...props.shuffledList];
    updatedList[props.index].status = "passed";
    props.setShuffledList(updatedList);
    props.setIndex(props.index + 1);
  }

  function clickCorrect() {
    console.log("ding!");
    const audio = new Audio("public/ding.mp3");
    audio.play();
    const updatedList = [...props.shuffledList];
    updatedList[props.index].status = "correct";
    props.setShuffledList(updatedList);
    props.setIndex(props.index + 1);
    props.setNumberCorrect(props.numberCorrect + 1);
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
