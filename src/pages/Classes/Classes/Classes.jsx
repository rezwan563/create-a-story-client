import React from 'react';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    return (
        <div>
            <Helmet>
                <title>Classes | CreateAStory</title>
            </Helmet>
            <h2 className='text-2xl'>Classes page</h2>
        </div>
    );
};

export default Classes;