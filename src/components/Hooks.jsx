import React from "react";
import { useState } from "react";

function Hooks() {
  const [counter, sadamCounter] = useState(0);
  const addvalue = () => {
    if (counter < 5) {
      sadamCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 1) {
      sadamCounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <button
          className="bg-black text-white p-3 mr-2 rounded-lg"
          onClick={addvalue}
        >
          Add Value
        </button>
        <button
          className="bg-black text-white p-3 mr-2 rounded-lg"
          onClick={removeValue}
        >
          Remove Value
        </button>
      </div>
      <button>Current Value is {counter} :</button>
    </>
  );
}

export default Hooks;
