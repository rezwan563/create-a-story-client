import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    return (
        <div>
            <Helmet>
                <title>My Classes | Dashboard</title>
            </Helmet>
            <h2>My classes for instructor</h2>
        </div>
    );
};

export default MyClasses;