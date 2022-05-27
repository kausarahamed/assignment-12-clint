import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const Checkoutfrom = ({ book }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [trxId, setTrxId] = useState("");
  const [clintSecret, setClintSecret] = useState("");

  const { _id, price, name, email } = book;
  useEffect(() => {
    fetch(
      "https://pacific-lowlands-87873.herokuapp.com/create-payment-intent",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClintSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message || "");
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    //confirm
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clintSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTrxId(paymentIntent.id);

      setSuccess("Your payment is success");
      //success
      const payment = {
        book: _id,
        trxId: paymentIntent.id,
      };
      fetch(`https://pacific-lowlands-87873.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProcessing(false);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="px-28">
          <button
            className="btn btn-success-sm"
            type="submit"
            disabled={!stripe || !clintSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success} </p>
          <p>
            Your transaction Id:
            <span className="text-orange-500 font-bold">{trxId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkoutfrom;
