import React from 'react';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | CreateAStory</title>
            </Helmet>
            <h2 className='text-2xl'>Instructor page</h2>
        </div>
    );
};

export default Instructor;