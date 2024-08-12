import React from "react";
import { useState } from "react";

function Hooks() {
  const [counter, sadamCounter] = useState(0);
  const addvalue = () => {
    if (counter < 10) {
      // sadamCounter(counter + 1);  simple increase by 1
      // take prevoius value and jump 2 +
      sadamCounter((prevcounter) => prevcounter + 1);
      sadamCounter((prevcounter) => prevcounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 1) {
      // take prevoius value and jump 2 -
      sadamCounter((prevcounter) => prevcounter - 1);
      sadamCounter((prevcounter) => prevcounter - 1);
    }
  };
  return (
    <>
      <div className="container mx-auto p-4 px-16 text-center">
        <h1>UseState</h1>
        <button
          className="bg-black text-white p-4 mr-2 rounded-lg "
          onClick={addvalue}
        >
          Add Value
        </button>
        <button
          className="bg-black text-white p-4 mr-2 rounded-lg "
          onClick={removeValue}
        >
          Remove Value
        </button>
      </div>
      <div className="text-center">
        <button className="text-center">Current Value is {counter} :</button>
      </div>
    </>
  );
}

export default Hooks;
