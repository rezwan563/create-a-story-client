import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
//   const [isDisable, setIsDisable] = useState(false);

  const handleStudent = () => {
    setIsDisable(true);
  };
  const handleInstructor = () => {
    setIsDisable(true);
  };
  return (
    <div>
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
              <th>Student</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <button disabled={true} className="bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white">
                    Make Student
                  </button>
                </td>
                <td>
                  <button className="bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white">
                    Make Instructor
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

export default ManageUser;
