import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, [id]);
  const { name, price, image, description, quantity, minimum } = product;
  // form
  const handleForm = (e) => {
    e.preventDefault();
    const addQuantity = e.target.quantity.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const newQuantity = quantity + +addQuantity;

    fetch(`https://intense-stream-06695.herokuapp.com/user/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Quantity Added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">PRODUCT INFO</h1>
          <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[700px]">
            <img
              className="rounded-t-xl w-full mt-3 h-[300px]"
              src={image}
              alt=""
            />
            <h3 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
              {name}
            </h3>
            <div className="text-xl font-sans px-5 ">
              {description.slice(0, 100)}
            </div>
            <div className="absolute bottom-0 w-full">
              <div className="text-xl font-sans px-5 ">
                <span className="text-2xl">Price: $</span>
                {price}
              </div>
              <div className="text-xl font-sans px-5 ">
                <span className="text-2xl">Minimum Quantity: </span>
                {quantity} Unit
              </div>
              <div className="text-xl font-sans px-5 ">
                <span className="text-2xl">Available Quantity: </span>
                {quantity} Unit
              </div>
              <div className="text-xl font-sans px-5 ">
                <span className="text-2xl">Minimum Order: </span>
                {minimum} Unit
              </div>
            </div>
          </div>
        </div>

        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleForm}>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
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
                  placeholder="E-mail"
                  class="input input-bordered"
                  value={user?.email}
                  disabled
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone"
                  class="input input-bordered"
                  // value={number}
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
                  // value={address}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  class="input input-bordered"
                  // value={productQuantity}
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">
                  Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
