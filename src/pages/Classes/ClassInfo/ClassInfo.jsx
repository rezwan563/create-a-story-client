import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Navigate, useLocation } from "react-router-dom";

const ClassInfo = ({ cls }) => {
  const {
    _id,
    name,
    image,
    availableSeats,
    enrolledStudents,
    price,
    instructor,
  } = cls;
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleAppliedClass = () => {
    if (!user) {
      toast.warning("Please login to continue");
    }
    
  };
  return (
    <div className="max-w-7xl mx-auto my-2 md:my-10">
      <div className={`card w-full md:w-96 p-2 bg-base-100 shadow-xl ${availableSeats === 0 && 'bg-red-400'}`}>
        <figure>
          <img src={image} alt="class" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <small>{instructor}</small>
          </p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-start">
            <div className="">
              Remaining Seats:{" "}
              <span className="text-lg md:text-xl">{availableSeats}</span>
            </div>
            <div className="">
              Enrolled Students:{" "}
              <span className="text-lg md:text-xl">{enrolledStudents}</span>
            </div>
          </div>
          <button
            onClick={handleAppliedClass }
            className="bg-black hover:bg-slate-900 p-2 text-white dark:bg-slate-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
