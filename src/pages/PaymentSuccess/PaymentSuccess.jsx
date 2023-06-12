import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {tranId} = useParams()
    return (
        <div className='h-screen flex justify-center items-center'>
            <h2 className='text-2xl'>Payment successfull {tranId}</h2>
        </div>
    );
};

export default PaymentSuccess;