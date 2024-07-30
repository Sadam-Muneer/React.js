import React from "react";

const Interview = () => {
  const students = [1, 2, 3, 5];
  return (
    <div>
      <p>{students.length && "No Students Founds"}</p>
      {/* solutions */}
      <p>{students.length === 0 ? "No Students Found" : students.length}</p>
      <p>Number of Students are : {students.length}</p>
      {/* <p>{!students.length && "No Students Founds"}</p> */}
    </div>
  );
};

export default Interview;
