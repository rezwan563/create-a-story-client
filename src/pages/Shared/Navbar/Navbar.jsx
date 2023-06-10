import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () =>{
    logOut()
    .then(toast.success('Logout Successful'))
    .catch()
  }
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {
        user && <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      }
    </>
  );
  return (
    // TODO: Sticky navbar
    <div className="navbar shadow-lg bg-base-100 flex justify-around items-center">
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
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
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
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link  to='/login' className="bg-black hover:bg-slate-800 p-2 text-white ">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
