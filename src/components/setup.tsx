import { useState, useEffect } from "react";
import "./setup.css";

function Setup(props) {
  const handleSelectChange = (event) => {
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
