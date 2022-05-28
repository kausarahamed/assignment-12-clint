import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Button from "../Shared/Button";
import { MdDeleteForever } from "react-icons/md";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://pacific-lowlands-87873.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const deleteHandeler = (id) => {
    Swal.fire({
      title: "Are You Sure To Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pacific-lowlands-87873.herokuapp.com/user/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Admin delete ", "success");
          });
      }
    });
  };
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>

            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <span className="flex gap-5">
                <button onClick={() => deleteHandeler(user._id)}>
                  <MdDeleteForever />
                </button>
              </span>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
