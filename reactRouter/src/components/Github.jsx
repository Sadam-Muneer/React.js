import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Sadam-Muneer").then((response) =>
      response.json().then((data) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        } else {
          setData(data);
        }
      })
    );
  });
  return (
    <div className="mx-auto w-full max-w-7xl">
      <h2 className="text-2xl font-semibold mb-4 py-5">GitHub data</h2>
      <div className="flex items-center mb-4">
        <img
          src={data.avatar_url}
          alt={`${data.name}'s avatar`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{data.name}</h3>
          <p className="text-gray-600">{data.login}</p>
        </div>
      </div>
      <p className="mb-4">{data.bio}</p>
      <ul>
        <li>
          <strong>Followers:</strong> {data.followers}
        </li>
        <li>
          <strong>Following:</strong> {data.following}
        </li>
        <li>
          <strong>Public Repositories:</strong> {data.public_repos}
        </li>
        <li>
          <strong>Location:</strong> {data.location || "N/A"}
        </li>
      </ul>
      <div className="mt-4">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2"
        >
          View GitHub data
        </a>
      </div>
    </div>
  );
};

export default Github;
