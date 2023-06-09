import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnrolledClass = () => {
    return (
        <div>
            <Helmet>
                <title>Enrolled Class | Dashboard</title>
            </Helmet>
            <h2>Enrolled classes for students</h2>
        </div>
    );
};

export default EnrolledClass;