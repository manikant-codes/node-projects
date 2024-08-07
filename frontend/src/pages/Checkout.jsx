import React, { useState } from "react";
import CartSection from "../components/checkout/CartSection";
import PaymentSection from "../components/checkout/PaymentSection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkout/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51PkibDRobNkuNiWTnLsDWxNS6DMlBSLrrqEEghYCfNPPaH0WieQ6djZGkZBcmEzV4dIkcZsgZDAgaN5QQQEYjzJq002bl4dmhV"
);

function Checkout() {
  const [order, setOrder] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="p-8">
      <CartSection />
      {/* <AddressSection /> */}
      <PaymentSection setClientSecret={setClientSecret} setOrder={setOrder} />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      )}
    </div>
  );
}

export default Checkout;
