import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const RowUser = ({ user, refetch }) => {
  const { email, role } = user;
  const [requestier] = useAuthState(auth);
  const makeAdmin = () => {
    fetch(`http://localhost:5000/owner/admin/${email}`, {
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
      <td>
        <button class="btn btn-xs">Remove</button>
      </td>
    </tr>
  );
};

export default RowUser;
