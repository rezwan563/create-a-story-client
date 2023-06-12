import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
const StudentReviews = () => {
  return (
    <div className="">
      <SectionTitle title="Our Students"></SectionTitle>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <div className="card w-full md:w-96 p-2 bg-base-100 shadow-2xl relative dark:bg-slate-400 dark:text-slate-800">
            <div className="avatar">
              <div className="w-16 rounded-full ">
                <img
                  className=""
                  src="https://i.ibb.co/c6CMxHv/portrait-photography-neutral-background-1.jpg"
                />
              </div>
            </div>
            <div className="min-h-[10em]">
              <h2 className="text-xl md:text-2xl font-bold">Samantha</h2>
              <p>
                <small>Batch 6</small>
              </p>
              <p>
                Exceptional instructors who inspired creativity and provided
                valuable technical guidance.
              </p>
            </div>
          </div>
          <div className="card w-full md:w-96 p-2 bg-base-100 shadow-2xl relative dark:bg-slate-400 dark:text-slate-800">
            <div className="avatar">
              <div className="w-16 rounded-full ">
                <img
                  className=""
                  src="https://i.ibb.co/c6CMxHv/portrait-photography-neutral-background-1.jpg"
                />
              </div>
            </div>
            <div className="min-h-[10em]">
              <h2 className="text-xl md:text-2xl font-bold">Brian</h2>
              <p>
                <small>Batch 8</small>
              </p>
              <p>
              Well-structured curriculum, interactive sessions, and practical assignments that enhanced my skills.
              </p>
            </div>
          </div>
          <div className="card w-full md:w-96 p-2 bg-base-100 shadow-2xl relative dark:bg-slate-400 dark:text-slate-800">
            <div className="avatar">
              <div className="w-16 rounded-full ">
                <img
                  className=""
                  src="https://i.ibb.co/c6CMxHv/portrait-photography-neutral-background-1.jpg"
                />
              </div>
            </div>
            <div className="min-h-[10em]">
              <h2 className="text-xl md:text-2xl font-bold">Joshua</h2>
              <p>
                <small>Batch 5</small>
              </p>
              <p>
              Outstanding facilities, access to top-notch equipment, and constructive feedback improved my photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
