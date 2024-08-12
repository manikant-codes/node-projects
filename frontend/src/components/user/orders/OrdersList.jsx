import { Badge } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import {
  getUserOrders,
  updateOrderStatus,
} from "../../../services/apiServices";
import MyList from "../../common/list/MyList";

function OrdersList() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getUserOrders().then((data) => {
      setOrders(data.data);
    });
  }, []);

  async function handleCancelOrder(e, value) {
    const input = window.confirm("Are you sure you want to cancel this order?");
    if (input) {
      await updateOrderStatus(value._id, { status: "cancelled" });
      alert("Cancelled successfully.");
      const data = await getUserOrders();
      setOrders(data.data);
    }
  }

  function getImgUrl(value) {
    return value.orderItems[0].image;
  }

  function renderDesc(value) {
    return "₹" + value.total;
  }

  return (
    <div>
      <MyList
        list={orders}
        fields={{ title: "_id" }}
        renderDesc={renderDesc}
        getImgUrl={getImgUrl}
        actions={[
          {
            id: 1,
            renderAction: (value) => {
              return (
                <Badge
                  color="gray"
                  className="px-4 py-2 border rounded-full text-sm"
                >
                  {value.status}
                </Badge>
              );
            },
          },
          {
            id: 2,
            onClick: handleCancelOrder,
            text: (
              <span className="flex items-center">
                <HiX className="mr-1 w-4 h-4" /> Cancel
              </span>
            ),
            color: "failure",
            btnProps: (value) => ({
              size: "sm",
              disabled: value.status === "cancelled",
            }),
          },
        ]}
      />
    </div>
  );
}

export default OrdersList;
