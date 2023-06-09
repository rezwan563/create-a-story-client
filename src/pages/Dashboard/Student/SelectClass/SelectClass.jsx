import React from 'react';
import { Helmet } from 'react-helmet-async';

const SelectClass = () => {
    return (
        <div>
            <Helmet>
                <title>Selected Class | Dashboard</title>
            </Helmet>
            <h2>Select classes for students</h2>
        </div>
    );
};

export default SelectClass;