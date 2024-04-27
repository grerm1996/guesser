import { useState, useEffect } from "react";
import "./timer.css";

function Timer() {
  const [time, setTime] = useState<number>(10);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning && time > 0) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  }, [time]);

  function start() {
    if (!isRunning) {
      setIsRunning(true);
      setTime((time) => time - 1);
    }
  }

  function formattedTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return (
    <>
      <div className="clock">{formattedTime(time)}</div>
      {isRunning ? "" : <button onClick={() => start()}>start</button>}
    </>
  );
}

export default Timer;
