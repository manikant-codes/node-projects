import React from "react";
import UserPageTitle from "../../components/common/UserPageTitle";
import AddressForm from "../../components/user/address/AddressForm";

function Address() {
  return (
    <div className="p-8">
      <UserPageTitle title="Address" />
      <AddressForm />
    </div>
  );
}

export default Address;
