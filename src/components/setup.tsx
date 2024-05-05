import "./setup.css";
import { ChangeEvent } from "react";

function Setup(props: {
  timeLimit: number;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  setTimeLimit: (value: number) => void;
  start: () => void;
  gameStart: boolean;
  index: number;
}) {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <input
          className="time-input"
          placeholder="Enter time limit"
          value={props.timeLimit}
          onChange={(event) => props.setTimeLimit(parseInt(event.target.value))}
        />
      </div>
      <select
        className="dropdown"
        value={props.selectedOption}
        onChange={handleSelectChange}
      >
        <option value="ghibli">Ghibli</option>
        <option value="cage">Nicholas Cage</option>
      </select>

      <button className="start-button" onClick={() => props.start()}>
        START
      </button>
    </>
  );
}

export default Setup;
