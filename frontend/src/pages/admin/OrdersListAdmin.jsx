import { Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AdminPageTitle from "../../components/common/AdminPageTitle";
import MyList from "../../components/common/list/MyList";
import { getAllOrders, updateOrderStatus } from "../../services/apiServices";

function OrdersListAdmin() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((data) => {
      setOrders(data.data);
    });
  }, []);

  function goToUpdateOrders(e, value) {
    if (value) {
      navigate(`/admin/orders/${value._id}`);
    }
  }

  function getImageUrl(value) {
    return value.orderItems[0].image || "/images/placeholder.jpg";
  }

  async function handleStatusChange(e, value) {
    const input = window.confirm("Are you sure you want to cancel this?");
    if (input) {
      await updateOrderStatus(value._id, { status: e.target.value });
      alert("Updated successfully.");
      const data = await getAllOrders();
      setOrders(data.data);
    }
  }

  function renderDesc(value) {
    // return <p>Order Status: {value.status}</p>;
  }

  return (
    <div>
      <AdminPageTitle title="Orders" />
      <div className="mt-8">
        <MyList
          list={orders}
          fields={{ title: "_id", desc: "status" }}
          getImgUrl={getImageUrl}
          renderDesc={renderDesc}
          actions={[
            { id: 1, icon: <HiPencil />, onClick: goToUpdateOrders },
            {
              id: 2,
              renderAction: (value) => {
                return (
                  <Select
                    value={value.status}
                    onChange={(e) => {
                      handleStatusChange(e, value);
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="failed">Failed</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </Select>
                );
              },
            },
          ]}
        />
      </div>
    </div>
  );
}

export default OrdersListAdmin;
