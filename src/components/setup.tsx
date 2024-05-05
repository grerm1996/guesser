import "./setup.css";
import { ChangeEvent } from "react";

function Setup(props: {
  timeLimit: number | "";
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  setTimeLimit: (value: number | "") => void;
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
        <div className="time-setter-container">
          <input
            className="time-input"
            value={props.timeLimit}
            onChange={(event) => {
              if (event.target.value === "") props.setTimeLimit("");
              else if (isNaN(Number(event.target.value)))
                props.setTimeLimit("");
              else props.setTimeLimit(parseInt(event.target.value));
            }}
          />{" "}
          <p> seconds</p>
        </div>
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
