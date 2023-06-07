import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | CreateAStory</title>
            </Helmet>
            <h2 className='text-2xl'>Dashboard page</h2>
        </div>
    );
};

export default Dashboard;