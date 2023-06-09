import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../pages/provider/PrivateRoute";
import SelectClass from "../pages/Dashboard/Student/SelectClass/SelectClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass/EnrolledClass";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClass from "../pages/Dashboard/Admin/ManageClass/ManageClass";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";

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
       {
        path:'/login',
        element: <Login></Login>,
       },
       {
        path:'/register',
        element: <Register></Register>
       }
      

    ]
  },
  {
    path:'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
        // TODO: Dashboard links on the sidebar
        {
            path:'dashboard/',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path:'selected_classes',
            element: <SelectClass></SelectClass>,
        },
        {
            path:'erolled_classes',
            element: <EnrolledClass></EnrolledClass>,
        },
        {
            path:'add_class',
            element: <AddAClass></AddAClass>,
        },
        {
            path:'my_classes',
            element: <MyClasses></MyClasses>,
        },
        {
            path:'manage_classes',
            element: <ManageClass></ManageClass>,
        },
        {
            path:'manage_users',
            element: <ManageUser></ManageUser>,
        },
       
    ]
  },
  {
    path:'*',
    element: <div className="text-2xl text-center">You are lost</div>
  }
]);

export default router;