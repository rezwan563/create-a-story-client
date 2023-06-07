import React from 'react';
import DashboardNav from '../../pages/Shared/Dashboard/DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
        </div>
    );
};

export default DashboardLayout;