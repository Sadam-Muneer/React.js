// Take an array , loop it in the form of list and also remove data 2 for keys importance

import React from "react";
const Interview2 = () => {
  const items = [
    { id: 1, name: "Sadam Muneer", dept: "CS" },
    { id: 2, name: "Ali Hassan", dept: "IT" },
    { id: 3, name: "Husnain Asad", dept: "DS" },
    { id: 4, name: "Hamza Iqbal", dept: "IT" },
    { id: 5, name: "Matti-ul-Hassan", dept: "CS" },
  ];
  const deleteAfterFiltering = items.filter((item) => item.id !== 2);
  return (
    <div className="container mx-auto p-4 px-16 border-t-8 border-blue-400">
      <h1 className="text-2xl font-bold mb-4">Interview Question :</h1>
      <h1 className="text-2xl font-bold mb-4">
        Take an array of Students , loop it in the form of Lists
      </h1>
      <ul className="list-disc pl-6">
        {deleteAfterFiltering.map((item) => (
          <li key={item.id} className="mb-2 text-lg text-gray-700">
            <div>
              {item.id}-: {item.name}
            </div>
            <p> {item.dept}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Interview2;
