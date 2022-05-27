import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";

const Order = () => {
  const [Order, setAllOrder] = useState([]);

  useEffect(() => {
    fetch("https://pacific-lowlands-87873.herokuapp.com/order")
      .then((response) => response.json())
      .then((json) => setAllOrder(json));
  }, [Order]);

  return (
    <div className="grid md:grid-cols-3 gap-5 px-5">
      {Order.map((or) => (
        <SingleOrder key={or._id} order={or}></SingleOrder>
      ))}
    </div>
  );
};

export default Order;
