import { useState, useEffect } from "react";
import "./timer.css";

function Timer(props: {
  timeLimit: number | "";
  gameStart: boolean;
  setGameOver: (value: boolean) => void;
  setGameStart: (value: boolean) => void;
}) {
  const [time, setTime] = useState<number | "">(props.timeLimit);

  useEffect(() => {
    setTime(props.timeLimit);
  }, [props.timeLimit]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (time === 0) {
      props.setGameOver(true);
      props.setGameStart(false);
    }

    if (time != "" && props.gameStart && time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => (prevTime as number) - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  function formattedTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return (
    <>{time !== "" ? <div className="clock">{formattedTime(time)}</div> : ""}</>
  );
}

export default Timer;
