import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navber = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <nav>
          <Link className="mr-4" to="/">
            Home
          </Link>

          <Link className="mr-4" to="/cycletires">
            Tires
          </Link>
          <Link className="mr-4" to="/blogs">
            Blogs
          </Link>
          {user?.uid && (
            <>
              {" "}
              <Link className="mr-4" to="/inventoris">
                Inventories
              </Link>
              <Link className="mr-4" to="/additem">
                Add Item
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
        </nav>
        <a className="btn btn-ghost normal-case text-xl">AirCool</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
