//Dynamic values in React.js

import React from "react";
const Home = () => {
  const name = "Sadam";
  const father_name = "Muneer Abbas";
  const dept = "CS";
  const sadam = () => {
    const sectionName = "A";
    return sectionName;
  };
  return (
    <div className="container mx-auto p-4 px-16">
      <h1>My Name is {name}</h1>
      <h1>My Father name is {father_name}</h1>
      <p>My department is {dept}</p>
      <p>Expression is {2 + 3}</p>
      <p>Section Name is {sadam()}</p>
    </div>
  );
};
export default Home;
