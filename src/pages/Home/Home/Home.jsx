import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopSlider from '../HomeSections/TopSlider/TopSlider';
import PopularClasses from '../HomeSections/PopularClasses/PopularClasses';
import PopularInstructors from '../HomeSections/PopularInstructors/PopularInstructors';
import StudentReviews from '../HomeSections/StudentReviews/StudentReviews';

const Home = () => {
    return (
        <div className='dark:bg-slate-700 '>
            <Helmet>
                <title>Home | CreateAStory</title>
            </Helmet>
            <section>
                <TopSlider></TopSlider>
            </section>
            <section className=''>
                <PopularClasses></PopularClasses>
            </section>
            <section>
                <PopularInstructors></PopularInstructors>
            </section>
            <section>
                <StudentReviews></StudentReviews>
            </section>
        </div>
    );
};

export default Home;