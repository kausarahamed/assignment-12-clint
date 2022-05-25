import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyItem = () => {
  const navigate = useNavigate();

  const [products, setproduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/items`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);

  const deleteHandeler = (id) => {
    const confirm = window.confirm("Are You Sure");
    if (confirm) {
      fetch(`http://localhost:5000/items/${id}`, {
        method: "delete",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
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
  return (
    <div>
      <p className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
        My Total Item: {products.length}
      </p>
      <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl p-10 ">
        <div className="pt-10 grid md:grid-cols-3 gap-5 py-10">
          {products.map((product) => (
            <div key={products._id}>
              <img className="h-[100px] w-[100px]" src={product.image} alt="" />
              <p>Name:{product.name}</p>
              <p>Email: {product.email}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>

              <button
                onClick={() => deleteHandeler(product._id)}
                className=" text-red-600 text-4xl p-2  rounded-xl ml-36"
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItem;
