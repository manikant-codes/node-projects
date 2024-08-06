import React from "react";
import CartSection from "../components/checkout/CartSection";
import PaymentSection from "../components/checkout/PaymentSection";

function Checkout() {
  return (
    <div className="p-8">
      <CartSection />
      {/* <AddressSection /> */}
      <PaymentSection />
    </div>
  );
}

export default Checkout;
