import React from "react";
import OrderListItem from "./OrderListItem";

function OrdersList() {
  return (
    <div>
      <ul className="flex flex-col gap-6">
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
        <OrderListItem isLast />
      </ul>
    </div>
  );
}

export default OrdersList;
