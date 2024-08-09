import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div className="text-center border-t-8 border-blue-500">
      <h1>Data Fetching with useEffect</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default UseEffect;
