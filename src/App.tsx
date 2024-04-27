import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/timer.tsx";

let list = [
  "Spirited Away",
  "Howl's Moving Castle",
  "Porco Rosso",
  "The Boy and the Heron",
];
const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [index, setIndex] = useState<number>(0);
  const [shuffledList, setShuffledList] = useState<string[]>([]);

  useEffect(() => setShuffledList(shuffle(list)), []);

  return (
    <div className="container">
      <p className="display">{shuffledList[index]}</p>
      <Timer />
      <button onClick={() => setIndex((prevIndex) => prevIndex + 1)}>
        Got it
      </button>
    </div>
  );
}

export default App;
