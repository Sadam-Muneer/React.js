import React, { useState } from "react";
import imgone from "../assets/netflixImage.jpeg";
import imgtwo from "../assets/netflixImage02.jpeg";
function Image() {
  const [show, setShow] = useState(imgone);
  return (
    <>
      <div>
        <img src={show === imgone ? imgone : imgtwo} alt="img" />
      </div>
      <button
        className="bg-black text-white px-3 mr-2 py-2 my-4"
        onClick={() => setShow(imgone)}
      >
        Show 1st image
      </button>
      <button
        className="bg-black text-white px-3 mr-2 py-2 my-4"
        onClick={() => setShow(imgtwo)}
      >
        Show 2nd image
      </button>
    </>
  );
}

export default Image;
