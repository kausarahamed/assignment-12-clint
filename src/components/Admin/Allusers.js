import React from "react";
import { useQuery } from "react-query";
import Loader from "react-spinners/ClipLoader";
import RowUser from "./RowUser";

const Allusers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/owner").then((res) => res.json())
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h1>All user: {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <RowUser key={user._id} user={user} refetch={refetch}></RowUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
