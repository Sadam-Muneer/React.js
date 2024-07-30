import React from "react";
import seriesdata from "../api/SeriesData.json";

const Loops04 = () => {
  return (
    <div className="container mx-auto p-4 px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seriesdata.map((series) => (
          <div
            key={series.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden "
          >
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
                <b>Cast </b>: {series.cast.join(", ")}
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
        ))}
      </div>
    </div>
  );
};

export default Loops04;
