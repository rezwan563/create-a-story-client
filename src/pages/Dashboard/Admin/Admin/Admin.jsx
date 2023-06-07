import React from 'react';
import { Helmet } from 'react-helmet-async';

const Admin = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | CreateAStory</title>
            </Helmet>
            <h1 className='text-2xl'>Admin Dashboard</h1>
        </div>
    );
};

export default Admin;