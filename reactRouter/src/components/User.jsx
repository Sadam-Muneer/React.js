import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="mx-auto w-full max-w-7xl text-center p-4 bg-gray-600 text-white my-3 text-3xl">
      User : {userid}
    </div>
  );
};

export default User;
