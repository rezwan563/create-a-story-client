import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useSelectClass from "../../../hooks/useSelectClass";
import useAdmin from "../../../hooks/useAdmin";
import useIsInstructor from "../../../hooks/useIsInstructor";

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

  const [isAdmin] = useAdmin()
  const [isInstructor] = useIsInstructor()
  
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedClasses] = useSelectClass()

  const handleAppliedClass = (classId) => {
    if (!user) {
      toast.warning("Please login to continue");
      return navigate('/login', {state:{from: location}})
    }
    const classInfo = {selectedClass: classId, paidStatus: false, name, image, price, availableSeats, enrolledStudents, instructor, email: user?.email}
    fetch('https://assignment-12-capture-a-story-server.vercel.app/select_classes',{
      method: "POST",
      headers:{
        'content-type':'application/json',
    },
    body: JSON.stringify(classInfo)
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.insertedId){
        toast.success('Class selected')
      }
    })

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
          <div className=" ">
            <p className="">
              Remaining Seats:{" "}
              <span className="text-lg md:text-xl">{availableSeats}</span>
            </p>
            <p className="">
              Enrolled Students:{" "}
              <span className="text-lg md:text-xl">{enrolledStudents}</span>
            </p>
          </div>
          <button  
            onClick={()=>handleAppliedClass(_id) }
            className={`${ (isAdmin || isInstructor) ? 'hidden' : 'bg-black hover:bg-slate-900 p-2 text-white dark:bg-slate-600'}`}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
