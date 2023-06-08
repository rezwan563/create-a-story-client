import React from "react";
import { Helmet } from "react-helmet-async";
import useAllClass from "../../../hooks/useAllClass";
import useAllInstructor from "../../../hooks/useAllInstructor";

const Instructors = () => {
    const [allInstructors] = useAllInstructor()
  return (
    <div>
        <Helmet>
            <title>Instructors | CreateAStory</title>
        </Helmet>
      <h2 className="text-2xl">Instructors page: {allInstructors?.length}</h2>
    </div>
  );
};

export default Instructors;
