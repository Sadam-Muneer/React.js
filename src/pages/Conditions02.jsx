import React from "react";

const Conditions02 = () => {
  const age = 18;
  let canwatch = "Not Available";
  if (age >= 18) canwatch = "Watch Now";
  const lastmethod = () => {
    if (age >= 18) "Watch Now";
    return "Not Available";
  };
  return (
    <div>
      <button className="bg-red-800 border-red-100 rounded-md p-3 ">
        {age <= 20 ? "Watch Now" : "Not Available"}
      </button>
      <button className="bg-red-800 border-red-100 rounded-md p-3 mx-4">
        {canwatch}
      </button>
      <button className="bg-red-800 border-red-100 rounded-md p-3 mx-4">
        {lastmethod()}
      </button>
    </div>
  );
};

export default Conditions02;
