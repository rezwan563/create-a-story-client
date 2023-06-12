import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2">
        <div>
          <img
            src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg?w=740&t=st=1686587971~exp=1686588571~hmac=b3c730cd5b6ac1787af20beb5491be7f4543fc4d88bdc67775fd1001794de270"
            alt=""
          />
        </div>
        <div className="h-screen flex justify-center items-center">
          <div className="space-y-5">
            <h3 className="font-bold text-5xl">Opps!</h3>
            <p className="text-2xl">Looks like you're lost</p>
            <p>
              You can go back to{" "}
              <span className="">
                <Link to="/" className="text-blue-700 underline">
                  Home
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
