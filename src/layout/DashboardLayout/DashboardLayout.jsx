import React from 'react';
import DashboardNav from '../../pages/Shared/Dashboard/DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import Footer from '../../pages/Shared/Footer/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DashboardNav></DashboardNav>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;