import React from "react";
import { useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeVal = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeVal}>Remove Value</button>
      <p>Current Value is :{counter}</p>
    </div>
  );
}

export default Hooks;
