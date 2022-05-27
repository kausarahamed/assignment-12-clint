import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../firebase.init";
import Button from "./Shared/Button";

const Addreview = () => {
  const [user] = useAuthState(auth);
  const [rattingError, setRattingError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const ratting = e.target.ratting.value;
    if (ratting < 0 || ratting > 5) {
      return setRattingError("Ratting Will Be Between 0 to 5 ");
    }
    setRattingError("");
    const review = { name, comment, ratting };

    fetch("https://pacific-lowlands-87873.herokuapp.com/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Your Review Add Successfully");
        e.target.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
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
        {rattingError && <p className="text-red-500">{rattingError}</p>}
        <span className="text-center">
          <Button>Add Review</Button>
        </span>
      </form>
    </div>
  );
};

export default Addreview;
