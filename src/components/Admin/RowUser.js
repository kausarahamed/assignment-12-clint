import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import { MdDeleteForever } from "react-icons/md";

const RowUser = ({ user, refetch }) => {
  // start delete//

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://pacific-lowlands-87873.herokuapp.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, [users]);

  // const deleteHandeler = (id) => {
  //   Swal.fire({
  //     title: "Are You Sure To Delete?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://pacific-lowlands-87873.herokuapp.com/user/${id}`, {
  //         method: "delete",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           Swal.fire("Admin delete ", "success");
  //         });
  //     }
  //   });
  // };

  // end delete//

  const { email, role } = user;
  const [requestier] = useAuthState(auth);
  const makeAdmin = () => {
    fetch(`https://pacific-lowlands-87873.herokuapp.com/owner/admin/${email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestier),
    })
      .then((res) => {
        if (res.status === 403) {
          alert("Faild to make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          alert("Now you are a Admin");
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      {/* <td>
        <button>delete</button>
        <button onClick={() => deleteHandeler(user._id)}>
          <MdDeleteForever />
        </button>
      </td> */}
    </tr>
  );
};

export default RowUser;
