import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("white");
  return (
    <div
      className="outline-dashed text-blue-900 border mr-2"
      style={{ background: color, height: "100vh" }}
    >
      <>
        <button
          className="bg-white text-black px-3 py-2 rounded-sm mr-2"
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button
          className="bg-black text-white px-3 py-2 rounded-sm mr-2"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="bg-red-900 text-white px-3 py-2 rounded-sm mr-2"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-600 text-white px-3 py-2 rounded-sm mr-2"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-blue-800 text-white px-3 py-2 rounded-sm mr-2"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-yellow-400 text-white px-3 py-2 rounded-sm mr-2"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
      </>
    </div>
  );
};

export default BgChanger;
