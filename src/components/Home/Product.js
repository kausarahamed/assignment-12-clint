import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, price, image, description, quantity, minimum } = product;
  return (
    <div>
      <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[700px]">
        <img
          className="rounded-t-xl w-full mt-3 h-[200px]"
          src={image}
          alt=""
        />
        <h3 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
          {name}
        </h3>
        <div className="text-xl font-sans px-5 ">
          {description.slice(0, 150)}{" "}
          <span className="text-orange-400">
            {description.length > 150 ? "Read More..." : ""}
          </span>
        </div>
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
          <div className=" mt-5 flex justify-center">
            <Link
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary"
              to={`purchase/${_id}`}
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
