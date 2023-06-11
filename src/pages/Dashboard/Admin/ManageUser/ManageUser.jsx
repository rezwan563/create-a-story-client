import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const [isDisable, setIsDisable] = useState(false);

  const handleMakeAdmin = (user) =>{
    // setIsDisable(true)
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:"PATCH"
    })
    .then(res => res.json())
    .then(data =>{
       if(data.modifiedCount){
        refetch()
        toast.success(`${user.name} is now an Admin`)
       }
    })
    
  }

  const handleStudent = (userId) => {
    setIsDisable(true)
    console.log('clicked', userId);
  };
  const handleInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`,{
      method:"PATCH"
  })
  .then(res => res.json())
  .then(data =>{
     if(data.modifiedCount){
      refetch()
      toast.success(`${user.name} is now an Instructor`)
     }
  })
  };
  return (
    <div className="w-full px-2">
      <Helmet>
        <title>Manage User | Dashboard</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl font-semibold">
        Total users: {users?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Instructor</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role ? user.role : 'student'}</td>
                {/* TODO: disable button on click */}
                <td >
                  <button onClick={() => handleInstructor(user)}  className={` ${isDisable ? 'bg-red-200' : 'bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white'}`}>
                    Make Instructor
                  </button>
                </td>
                <td>
                  <button onClick={() => handleMakeAdmin(user)} disabled={isDisable}  className={`bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white ${isDisable ? 'bg-red-200': ''}`}>
                    Make Admin
                  </button>
                </td>
                <td><button onClick={() => handleDeleteUser(user)}  className={`bg-red-500 hover:bg-red-600 rounded-md p-2 text-white ${isDisable ? 'bg-red-200': ''}`}>
                    Delete User
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
