import React, { useEffect, useState } from "react";
import CartSection from "../components/checkout/CartSection";
import AddressSection from "../components/checkout/AddressSection";
import PaymentSection from "../components/checkout/PaymentSection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkout/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51PkibDRobNkuNiWTnLsDWxNS6DMlBSLrrqEEghYCfNPPaH0WieQ6djZGkZBcmEzV4dIkcZsgZDAgaN5QQQEYjzJq002bl4dmhV"
);

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // send cart items
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

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
      <AddressSection />
      <PaymentSection />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Checkout;
