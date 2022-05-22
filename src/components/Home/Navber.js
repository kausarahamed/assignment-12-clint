import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navber = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="navbar bg-base-100 bg-gradient-to-r from-secondary to-primary text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="mr-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="mr-4" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              {user?.uid && (
                <>
                  {" "}
                  <Link className="mr-4" to="/inventoris">
                    Inventories
                  </Link>
                  <Link className="mr-4" to="/dashboard">
                    DashBoard
                  </Link>
                  <Link className="mr-4" to="/myitem">
                    My Item
                  </Link>
                </>
              )}
              {user ? (
                <button onClick={() => signOut(auth)}>Log out</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">AirCool</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link className="mr-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="mr-4" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            {user?.uid && (
              <>
                {" "}
                <Link className="mr-4" to="/inventoris">
                  Inventories
                </Link>
                <Link className="mr-4" to="/dashboard">
                  DashBoard
                </Link>
                <Link className="mr-4" to="/myitem">
                  My Item
                </Link>
              </>
            )}
            {user ? (
              <button onClick={() => signOut(auth)}>Log out</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
