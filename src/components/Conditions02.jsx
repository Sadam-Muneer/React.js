import React from "react";

const Conditions02 = () => {
  const age = 18;
  let canwatch = "Not Available";
  if (age >= 18) canwatch = "Watch Now";
  const lastmethod = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };
  return (
    <div className="container mx-auto p-4 px-16">
      <button className="bg-red-800 border-red-100 rounded-md p-4 ">
        {age <= 15 ? "Watch Now" : "Not Available"}
      </button>
      <button className="bg-red-800 border-red-100 rounded-md p-4 mx-4">
        {canwatch}
      </button>
      <button className="bg-red-800 border-red-100 rounded-md p-4 mx-4">
        {lastmethod()}
      </button>
      <hr />
    </div>
  );
};

export default Conditions02;
