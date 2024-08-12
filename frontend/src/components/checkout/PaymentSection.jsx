import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { createOrder } from "../../services/apiServices";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function PaymentSection() {
  const [order, setOrder] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { cart } = useSelector((store) => {
    return store.cart;
  });

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  async function handleCheckout(e) {
    const cartItems = cart.map((value) => {
      return { productId: value._id, qty: value.qty };
    });
    const result = await createOrder({ cartItems });
    setOrder(result.order);
    setClientSecret(result.clientSecret);
  }

  return (
    <div className="mt-8">
      <Button color="accent" pill onClick={handleCheckout}>
        Proceed to Checkout <HiArrowRight className="ml-2 w-5 h-5" />
      </Button>

      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      )}
    </div>
  );
}

export default PaymentSection;
