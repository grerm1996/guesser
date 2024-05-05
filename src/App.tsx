import { useState } from "react";
import "./App.css";

import Setup from "./components/setup.tsx";

import GamePlay from "./components/gameplay.tsx";
import GameOver from "./components/gameover.tsx";
import ghibli from "./lists/ghibli.json";
import cage from "./lists/cage.json";

const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface Lists {
  [key: string]: string[];
}

const lists: Lists = { ghibli, cage };

interface item {
  name: string;
  status: string;
}

function App() {
  const [shuffledList, setShuffledList] = useState<item[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("ghibli");
  const [numberCorrect, setNumberCorrect] = useState<number>(0);
  const [timeLimit, setTimeLimit] = useState<number>(60);

  function start() {
    if (!gameStart) {
      setShuffledList(
        shuffle(lists[selectedOption]).map((item) => ({
          name: item,
          status: "unused",
        }))
      );
      setGameStart(true);
    }
  }
  function returnToStart() {
    setGameOver(false);
    setIndex(0);
    setNumberCorrect(0);
  }

  return (
    <div className="container">
      {!gameOver && gameStart ? (
        <GamePlay
          setGameOver={setGameOver}
          gameStart={gameStart}
          shuffledList={shuffledList}
          setGameStart={setGameStart}
          setShuffledList={setShuffledList}
          index={index}
          setIndex={setIndex}
          numberCorrect={numberCorrect}
          setNumberCorrect={setNumberCorrect}
          timeLimit={timeLimit}
        />
      ) : (
        ""
      )}

      {!gameOver && !gameStart && (
        <Setup
          gameStart={gameStart}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          start={start}
          index={index}
          timeLimit={timeLimit}
          setTimeLimit={setTimeLimit}
        />
      )}

      {gameOver ? (
        <GameOver
          shuffledList={shuffledList}
          index={index}
          numberCorrect={numberCorrect}
          returnToStart={returnToStart}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
