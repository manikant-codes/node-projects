import React from "react";
import UserPageTitle from "../../components/common/UserPageTitle";
import OrdersList from "../../components/user/orders/OrdersList";

function Orders() {
  return (
    <div>
      <UserPageTitle title="Orders" />
      <OrdersList />
    </div>
  );
}

export default Orders;
