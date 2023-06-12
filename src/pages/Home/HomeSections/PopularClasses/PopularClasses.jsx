import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import useClass from "../../../../hooks/useClass";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
    // const [classes, setClasses] = useState([])
    const [classes] = useClass()
  return (
    <div className="">
      <SectionTitle title="Popular Classes"></SectionTitle>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            
            {
                classes.map(cls => <ClassCard key={cls._id} cls={cls}></ClassCard>)
            }
            
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
