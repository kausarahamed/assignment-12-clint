import React, { useEffect, useState } from "react";
import Product from "./Product";

const Inventory = () => {
  const [airs, setAirs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => setAirs(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl mt-3 text-blue-400 font-serif">
        Our Parts
      </h1>
      <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
        {airs.slice(0, 6).map((air) => (
          <Product key={air._id} product={air} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
