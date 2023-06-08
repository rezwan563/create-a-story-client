import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    // TODO: Sticky navbar
    <div className="navbar  bg-base-100 flex justify-around items-center">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <IoMenu className="h-5 w-5"></IoMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2  p-2  shadow-md bg-base-100 rounded-box z-10 "
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" font-slack text-5xl">
          CreateAStory
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1686143087~exp=1686143687~hmac=8ceb1cde644dac8278ae24e371e172fea7cf34be47573a662bd13bbcd23fa6be" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-sm dropdown-content z-10 bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
