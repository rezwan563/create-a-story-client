import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardNav = () => {
  const navItems = (
    <>
      <li>
        <Link to='/dashboard/selected_classes'>My Selected Classes</Link>
      </li>
      <li>
        <Link to='/dashboard/erolled_classes'>My Enrolled Class</Link>
      </li>
      <li>
        <Link to='/dashboard/add_class'>Add a Class</Link>
      </li>
      <li>
        <Link to='/dashboard/my_classes'>My Classess</Link>
      </li>
      <li>
        <Link to='/dashboard/manage_classes'>Manage Classes</Link>
      </li>
      <li>
        <Link to='/dashboard/manage_users'>Manage Users</Link>
      </li>
    </>
  );
  return (
    <div>
      {/* TODO: Dashboard links on the sidebar */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="px-3 py-2 bg-slate-200 drawer-button lg:hidden"
          >
            Open dashboard
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
