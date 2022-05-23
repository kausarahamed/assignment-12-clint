import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const Inventory = () => {
  const navigate = useNavigate();
  const [cycles, setCycle] = useState([]);
  useEffect(() => {
    fetch("Service.json")
      .then((response) => response.json())
      .then((data) => setCycle(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl mt-3 text-blue-400 font-serif">
        Our Parts
      </h1>
      <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
        {cycles.slice(0, 6).map((cycle) => (
          <Product key={cycle._id} product={cycle} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/inventoris")}
          className="border-2 bg-orange-400 py-2 px-5 text-2xl rounded-lg text-white font-bold"
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Inventory;
