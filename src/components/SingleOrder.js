import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const SingleOrder = ({ order }) => {
  const navigate = useNavigate();
  const deleteHandeler = (id) => {
    const confirm = window.confirm("Are You Sure");
    if (confirm) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "delete",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount) {
            navigate("/");
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your product has been delete",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const { name, image, productQuantity, price, paid } = order;
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <img src={image} alt="" />
        <p>Order: {productQuantity} Unit</p>
        <p>Price: ${price}</p>
      </div>
      <span className="flex justify-between p-5">
        {price && !paid && (
          <Link
            to={`/dashboard/payment/${order._id}`}
            className="btn btn-square btn-success"
          >
            Pay
          </Link>
        )}
        {price && paid && (
          <span className="btn btn-square btn-success">Paid</span>
        )}

        <button onClick={() => deleteHandeler(order._id)}>
          <MdDeleteForever />
        </button>
      </span>
    </div>
  );
};

export default SingleOrder;
