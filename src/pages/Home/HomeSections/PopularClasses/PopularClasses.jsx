import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() =>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
  return (
    <>
      <SectionTitle title="Popular Classes"></SectionTitle>
      <div className="max-w-7xl mx-auto">
        <div>
            {
                // classes.map(class)
            }
        </div>
      </div>
    </>
  );
};

export default PopularClasses;
