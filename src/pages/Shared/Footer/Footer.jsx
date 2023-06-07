import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer flex-col justify-between  items-center  p-4 bg-black text-white ">
      <div className="items-center grid-flow-col">
        <Link to="/" className=" font-slack text-3xl">
          CreateAStory
        </Link>
      </div>
      <p>Copyright © {year} - All right reserved</p>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <FaTwitter className="text-2xl cursor-pointer"></FaTwitter>
        <FaYoutube className="text-2xl cursor-pointer"></FaYoutube>
        <FaFacebookF className="text-2xl cursor-pointer"></FaFacebookF>
      </div>
    </footer>
  );
};

export default Footer;
