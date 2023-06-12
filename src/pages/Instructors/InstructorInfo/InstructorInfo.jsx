import React from "react";

const InstructorInfo = ({instructor}) => {
    const { _id, name, image, email, numClasses, classes} = instructor
  return (
    <div className="max-w-7xl mx-auto my-5 md:my-10 ">
      <div className="card card-compact w-full md:w-96 px-2 bg-base-100 shadow-xl dark:bg-slate-400 dark:text-slate-700 ">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>Number of classes: <span className="text-lg md:text-xl">{numClasses}</span></p>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfo;
