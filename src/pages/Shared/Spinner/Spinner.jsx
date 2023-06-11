import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";



const Spinner = () => {
    const [color, setColor] = useState("#36454F");
  return (
    <div className="h-screen flex justify-center items-center">
    <ClipLoader color={color}></ClipLoader>
  </div>
  );
};

export default Spinner;
