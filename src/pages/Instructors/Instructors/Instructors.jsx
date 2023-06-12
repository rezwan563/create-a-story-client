import React from "react";
import { Helmet } from "react-helmet-async";
import useAllInstructor from "../../../hooks/useAllInstructor";
import InstructorInfo from "../InstructorInfo/InstructorInfo";

const Instructors = () => {
    const [allInstructors] = useAllInstructor()
  return (
    <div className="dark:bg-slate-700 dark:text-white">
        <Helmet>
            <title>Instructors | CreateAStory</title>
        </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            allInstructors.map(instructor => <InstructorInfo key={instructor._id} instructor={instructor}></InstructorInfo>)
        }
      </div>
    </div>
  );
};

export default Instructors;
