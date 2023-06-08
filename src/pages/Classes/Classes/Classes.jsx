import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAllClass from '../../../hooks/useAllClass';
import ClassInfo from '../ClassInfo/ClassInfo';

const Classes = () => {
    const [allClasses] = useAllClass()
    return (
        <div>
            <Helmet>
                <title>Classes | CreateAStory</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
                {
                    allClasses.map(cls => <ClassInfo key={cls._id} cls={cls}></ClassInfo>)
                }
            </div>
        </div>
    );
};

export default Classes;