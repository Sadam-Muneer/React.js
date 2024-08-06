import React from "react";
const Props = (sadam) => {
  const { series } = sadam;
  if (!series) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
        <img
          src={series.image_url}
          alt={series.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg ">
            <b>Name</b>:{series.name}
          </h2>
          <p className="text-gray-600">
            <b>Rating:</b> {series.rating}
          </p>
          <p className="text-gray-700 mt-2">
            <b>Description : </b>
            {series.description}
          </p>
          <p className="text-gray-500 mt-2">
            <b>Cast </b>: {series.cast.join(",")}
          </p>
          <a
            href={series.watchButton}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Props;
