import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopSlider from '../HomeSections/TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | CreateAStory</title>
            </Helmet>
            <section>
                <TopSlider></TopSlider>
            </section>
        </div>
    );
};

export default Home;