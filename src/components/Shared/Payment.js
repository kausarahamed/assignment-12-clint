import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>please pay:{id}</h1>
    </div>
  );
};

export default Payment;
