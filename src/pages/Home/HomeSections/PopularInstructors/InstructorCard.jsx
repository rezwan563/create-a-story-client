import React from "react";

const InstructorCard = ({instructor}) => {
    // Edit: shadow-xl on image-full class names
    const { name, image} = instructor
  return (
    <div className="card w-96 shadow-xl  image-full">
      <figure>
        <img
          src={image}
          alt="instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        
      </div>
    </div>
  );
};

export default InstructorCard;
