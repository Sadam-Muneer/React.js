import React from "react";

const Conditions02 = () => {
  const age = 18;
  return (
    <div>
      <button className="bg-red-800 border-red-100 rounded-md p-3">
        {age <= 20 ? "Watch Now" : "Not Available"}
      </button>
    </div>
  );
};

export default Conditions02;
