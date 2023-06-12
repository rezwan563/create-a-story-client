import React from "react";
import { Helmet } from "react-helmet-async";
import useSelectClass from "../../../../hooks/useSelectClass";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";

const SelectClass = () => {
  const {user} = useAuth()
  const [selectedClasses, refetch] = useSelectClass();
  const total =
    selectedClasses &&
    selectedClasses.reduce((sum, classes) => classes.price + sum, 0);

    const handlePayment = (classInfo)=>{
      const {name, price, instructor} = classInfo
      const orderInfo = {studentName: user?.displayName, studentEmail: user?.email, courseName: name, coursePrice: price, courseInstructor: instructor}
      console.log(orderInfo);
      fetch('http://localhost:5000/orders',{
        method: "POST",
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify(orderInfo)
      })
      .then(res => res.json())
      .then(result=>{
        window.location.replace(result.url)
        console.log(result);
      })

    }
  const handleDeleteClass = (classId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/select_classes/${classId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Class removed");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Selected Class | Dashboard</title>
      </Helmet>
      <div className="flex justify-around items-center gap-10">
        <h3 className="text-2xl">
          Selected classes: {selectedClasses?.length}
        </h3>
        <h3 className="text-2xl">Total Price: ${total}</h3>
        
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
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((n, index) => (
              <tr key={n._id}>
                <th>{index + 1}</th>
                <td>{n?.name}</td>
                <td>{n?.instructor}</td>
                <td className="">${n?.price}</td>
                <td><button onClick={()=>{handlePayment(n)}} className="py-2 px-3 rounded-md bg-black text-white">
          Pay
        </button></td>
                <td>
                  <button
                    onClick={() => handleDeleteClass(n._id)}
                    className="text-xl"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectClass;
