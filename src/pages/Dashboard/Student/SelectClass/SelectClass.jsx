import React from "react";
import { Helmet } from "react-helmet-async";
import useSelectClass from "../../../../hooks/useSelectClass";
import { FaTrash } from "react-icons/fa";

const SelectClass = () => {
  const [selectedClasses] = useSelectClass();
  const total =
    selectedClasses &&
    selectedClasses.reduce((sum, classes) => classes.price + sum, 0);

  return (
    <div className="w-full">
      <Helmet>
        <title>Selected Class | Dashboard</title>
      </Helmet>
      <div className="flex justify-around items-center gap-10">
        <h3 className="text-2xl">
          Selected classes: {selectedClasses?.length}
        </h3>
        <h3 className="text-2xl">Total Price: {total}</h3>
        <button className="py-2 px-3 rounded-md bg-black text-white">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                selectedClasses.map((n, index) => <tr key={n._id}>
                    <th>{index + 1}</th>
                    <td>{n?.name}</td>
                    <td>{n?.instructor}</td>
                    <td>${n?.price}</td>
                    <td><button className="text-xl"><FaTrash></FaTrash></button></td>
                  </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectClass;
