import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "./useAdmin";

const DashBoard = () => {
  // const [user] = useAuthState(auth);
  // const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h1 className="text-3xl text-secondary">My DashBoard</h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/order">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/additem">Add Items</Link>
          </li>
          <li>
            <Link to="/dashboard/myitem">My Items</Link>
          </li>
          <li>
            <Link to="/dashboard/makeadmin">All Users</Link>
          </li>

          <li>
            <Link to="/dashboard/allusers">Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
