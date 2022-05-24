import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Addreview = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
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
              <span class="label-text">Comment</span>
            </label>
            <input
              type="text"
              name="comment"
              placeholder="Comment"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Ratting</span>
            </label>
            <input
              type="number"
              name="ratting"
              placeholder="Ratting"
              class="input input-bordered"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addreview;
