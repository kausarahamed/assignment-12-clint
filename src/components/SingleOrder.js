import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "./Shared/Button";
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

  const { name, image, productQuantity } = order;
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <img src={image} alt="" />
        <p>Order: {productQuantity} Unit</p>
      </div>
      <span className="flex justify-between p-5">
        <Button>Buy Now</Button>

        <button onClick={() => deleteHandeler(order._id)}>
          <MdDeleteForever />
        </button>
      </span>
    </div>
  );
};

export default SingleOrder;
