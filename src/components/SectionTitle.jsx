import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='my-5 md:my-12'>
        <p className='text-3xl md:text-4xl px-8'><span className='border-l-4 dark:text-white  border-black pl-2 font-lobster'>{title}</span></p>
    </div>
    );
};

export default SectionTitle;