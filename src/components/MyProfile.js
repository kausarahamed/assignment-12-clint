import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <p className="text-2xl text-center font-semibold">My Profile</p>
      <div className="flex">
        <div className="w-1/2">
          <form>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  class="input input-bordered"
                  value={user?.displayName}
                  disabled
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  class="input input-bordered"
                  value={user?.email}
                  disabled
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone"
                  name="number"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  class="input input-bordered"
                  name="address"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Linkedin</span>
                </label>
                <input
                  type="text"
                  placeholder="linkedin"
                  class="input input-bordered"
                  name="linkedin"
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Name:{user?.displayName}</h1>
          <h1>Email:{user?.email}</h1>
          <h1>Education:</h1>
          <h1>Address:</h1>
          <h1>Linkdin:</h1>
          <h1>Phone:</h1>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
