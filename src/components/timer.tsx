import { useState, useEffect } from "react";
import "./timer.css";

function Timer(props) {
  const [time, setTime] = useState<number>(10);

  useEffect(() => {
    setTime(props.timeLimit);
  }, [props.timeLimit]);

  useEffect(() => {
    if (time == 0) {
      props.setGameOver(true);
      props.setGameStart(false);
    }

    if (props.gameStart && time > 0) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  }, [time]);

  function formattedTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return (
    <>
      <div className="clock">{formattedTime(time)}</div>
    </>
  );
}

export default Timer;
