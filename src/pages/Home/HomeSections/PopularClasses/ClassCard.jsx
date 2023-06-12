import React from "react";

const ClassCard = ({cls}) => {
    const { name, instructor, image, availableSeats, enrolledStudents} = cls
  return (
    <div className="card w-full md:w-96 dark:bg-slate-400 dark:text-slate-800 bg-base-100 shadow-xl px-2 relative">
      <figure>
        <img
          src={image}
          alt="learning"
        />
      </figure>
      <div className="min-h-[10em]">
        <h2 className="text-xl md:text-2xl font-bold">
          {name}
          <div className="badge badge-ghost">Popular</div>
        </h2>
        <p>Instructor: {instructor}</p>
        <div className="card-actions justify-end absolute bottom-5">
          <div className="badge badge-outline bg-red-200 p-4">Availabe Seats: {availableSeats}</div>
          <div className="badge badge-outline bg-green-200 p-4">Enrolled Students: {enrolledStudents}</div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
