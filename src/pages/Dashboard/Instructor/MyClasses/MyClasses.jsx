import React from "react";
import { Helmet } from "react-helmet-async";
import useMyClass from "../../../../hooks/useMyClass";

const MyClasses = () => {
  const [myClasses] = useMyClass()
  return (
    <div className="w-full">
      <Helmet>
        <title>My Classes | Dashboard</title>
      </Helmet>

      <h2 className="text-2xl font-bold">My classes : {myClasses?.length}</h2>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Class Name</th>
        <th>Available Seats</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        myClasses?.map((c, index) => <tr key={c._id}>
          <th>{index + 1}</th>
          <td>{c.name}</td>
          <td>{c.availableSeats}</td>
          <td>$ {c.price}</td>
        </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyClasses;
