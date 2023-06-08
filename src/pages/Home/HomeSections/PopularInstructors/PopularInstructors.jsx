import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import useInstructor from "../../../../hooks/useInstructor";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
    const [ instructors] = useInstructor()
  return (
    <>
      <SectionTitle title="Popular Instructors"></SectionTitle>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {
                instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
      </div>
    </>
  );
};

export default PopularInstructors;
