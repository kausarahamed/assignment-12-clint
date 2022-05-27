import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setproduct] = useState({});
  console.log(product);
  useEffect(() => {
    fetch(`https://pacific-lowlands-87873.herokuapp.com/purchase/${id}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, [id]);
  const { name, price, image, description, quantity, minimum } = product;
  const [quantityError, setQuantityError] = useState("");

  // form
  const handleForm = (e) => {
    e.preventDefault();
    setQuantityError("");
    const username = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const address = e.target.address.value;
    const productQuantity = e.target.productQuantity.value;
    const order = {
      username,
      name,
      email,
      number,
      address,
      productQuantity,
      image,
      price,
    };
    if (+productQuantity < +minimum || +productQuantity > +quantity) {
      return setQuantityError(
        `Please Order Minimum ${minimum} Maximum ${quantity}`
      );
    }

    fetch(`https://pacific-lowlands-87873.herokuapp.com/order`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ order }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Your Order is Confirmed. Please pay");
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
            <div className="text-xl font-sans px-5 ">{description}</div>
            <div className="absolute bottom-0 w-full">
              <div className="text-xl font-sans px-5 ">
                <span className="text-2xl">Price: $</span>
                {price}
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
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone"
                  name="number"
                  class="input input-bordered"
                  required
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
                  required
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
                  name="productQuantity"
                  required
                />
              </div>
              {quantityError && <p className="text-red-600">{quantityError}</p>}

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
