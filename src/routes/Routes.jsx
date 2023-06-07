import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
       {
        path:'/',
        element: <Home></Home>
       },
       {
        path:'instructors',
        element: <Instructors></Instructors>
       },
       {
        path:'/classes',
        element: <Classes></Classes>
       },
      

    ]
  },
  {
    path:'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
        // TODO: Dashboard links on the sidebar
        {
            path:'/dashboard/',
            element: <Dashboard></Dashboard>
        }
    ]
  },
  {
    path:'*',
    element: <div>You are lost</div>
  }
]);

export default router;