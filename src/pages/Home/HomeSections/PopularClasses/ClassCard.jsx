import React from "react";

const ClassCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl px-2 ">
      <figure>
        <img
          src="https://i.ibb.co/yQgH1qL/istockphoto-1311107708-612x612.jpg"
          alt="learning"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
