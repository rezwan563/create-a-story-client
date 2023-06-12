import React from 'react';
import { Helmet } from 'react-helmet-async';
import useEnrollClass from '../../../../hooks/useEnrollClass';

const EnrolledClass = () => {
    const [enrolledClass] = useEnrollClass()
    return (
        <div className='w-full'>
            <Helmet>
                <title>Enrolled Class | Dashboard</title>
            </Helmet>
            <div className="w-full">
      <Helmet>
        <title>Selected Class | Dashboard</title>
      </Helmet>
      <div className="flex justify-around items-center gap-10">
        <h3 className="text-2xl">
          Enrolled classes: {enrolledClass?.length}
        </h3>
        
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((n, index) => (
              <tr key={n._id}>
                <td>{index + 1}</td>
                <td>{n?.courseName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default EnrolledClass;