import React from "react";
import seriesdata from "../api/SeriesData.json";
import Props from "./Props";

const Loops04 = () => {
  return (
    <div className="container mx-auto p-4 px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seriesdata.map((series) => {
          return <Props key={series.id} series={series} />;
        })}
      </div>
    </div>
  );
};

export default Loops04;
