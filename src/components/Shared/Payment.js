import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Checkoutfrom from "./Checkoutfrom";
const stripePromise = loadStripe(
  "pk_test_51L411hDFweozIORyIfOwezrhNePx1CNjvhPI371lqDMj19GdCCADV1w5TBeZTiUcqj6lK4UfsYGY4zz26EXg07ca00JgHmCmrV"
);

const Payment = () => {
  const { id } = useParams();
  const uri = `http://localhost:5000/order/${id}`;
  const { data: book, isLoading } = useQuery(["booking", id], () =>
    fetch(uri).then((res) => res.json())
  );
  if (isLoading) {
    return <ClipLoader></ClipLoader>;
  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={book.image} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title font-bold">Plaease Pay for: {book.name}</h2>
        <p>Please Pay: {book.price}</p>
        <Elements stripe={stripePromise}>
          <Checkoutfrom book={book} />
        </Elements>
        {/* <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Payment;
