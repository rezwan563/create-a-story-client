import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | CreateAStory</title>
            </Helmet>
            <h3 className='text-2xl'>This is home</h3>
        </div>
    );
};

export default Home;