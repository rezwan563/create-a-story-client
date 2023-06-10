import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ImUsers } from "react-icons/im";
import { GiLaptop } from "react-icons/gi";
import { FaBookmark, FaFile, FaListAlt, FaMoneyCheck } from "react-icons/fa";

const DashboardNav = () => {
  const { user } = useContext(AuthContext);

//   TODO: load data to determin isAdmin/isStudent/isInstructor true
  const isAdmin = true;
  const isStudent = true;
  const isInstructor = true;

  const navItems = (
    <>
      {isStudent && (
        <>
          <li>
            <Link to="/dashboard/selected_classes"><FaBookmark></FaBookmark>My Selected Classes</Link>
          </li>
          <li>
            <Link to="/dashboard/erolled_classes"><FaMoneyCheck></FaMoneyCheck>My Enrolled Class</Link>
          </li>
        </>
      )}
      {isInstructor && (
        <>
          {" "}
          <li>
            <Link to="/dashboard/add_class"><FaFile></FaFile>Add a Class</Link>
          </li>
          <li>
            <Link to="/dashboard/my_classes"><FaListAlt></FaListAlt>My Classess</Link>
          </li>
        </>
      )}
      {isAdmin && (
        <>
          {" "}
          <li>
            <Link to="/dashboard/manage_classes"><GiLaptop></GiLaptop>Manage Classes</Link>
          </li>
          <li>
            <Link to="/dashboard/manage_users"><ImUsers></ImUsers>Manage Users</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      {/* TODO: Dashboard links on the sidebar */}
      <Helmet>
        <title>Dashboard | CreateAStory</title>
      </Helmet>
      <div className="drawer lg:drawer-open  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="px-3 py-2 bg-slate-200 drawer-button lg:hidden"
          >
            Open dashboard
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-slate-900 text-slate-200 ">
            {/* Sidebar content here */}
            {navItems}
            {/* <hr className="border-black border-2" />
            {homeNav} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
