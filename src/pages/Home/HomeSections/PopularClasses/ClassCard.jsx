import React from "react";

const ClassCard = ({cls}) => {
    const { name, instructor, image, availableSeats, enrolledStudents} = cls
  return (
    <div className="card w-96 bg-base-100 shadow-xl px-2 ">
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline bg-red-200 p-4">{availableSeats}</div>
          <div className="badge badge-outline bg-green-200 p-4">{enrolledStudents}</div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
