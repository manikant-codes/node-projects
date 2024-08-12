import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AdminPageTitle from "../../components/common/AdminPageTitle";
import MyAddBtn from "../../components/common/MyAddBtn";
import MyList from "../../components/common/list/MyList";
import { deleteProduct, getAllProducts } from "../../services/apiServices";

function ProductsListAdmin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data.data);
    });
  }, []);

  function goToAddUpdateProducts(e, value) {
    if (value) {
      navigate(`/admin/products/${value._id}`);
    } else {
      navigate("/admin/products/add");
    }
  }

  async function handleDelete(e, value) {
    const input = window.confirm("Are you sure you want to delete this?");
    if (input) {
      await deleteProduct(value._id);
      alert("Deleted successfully.");
      const data = await getAllProducts();
      setProducts(data.data);
    }
  }

  function getImageUrl(value) {
    return value.images[0];
  }

  function renderDesc(value) {
    return (
      <p className="flex items-center gap-2">
        <span>Gender: {value.gender}</span>
        <span>|</span>
        <span>Category: {value.category}</span>
        <span>|</span>
        <span>Price: ₹{value.price}</span>
      </p>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <AdminPageTitle title="Products" />
        <MyAddBtn text="Add Product" onClick={goToAddUpdateProducts} />
      </div>
      <div className="mt-8">
        <MyList
          list={products}
          fields={{ title: "name" }}
          getImgUrl={getImageUrl}
          renderDesc={renderDesc}
          actions={[
            { id: 1, icon: <HiPencil />, onClick: goToAddUpdateProducts },
            {
              id: 2,
              icon: <HiTrash />,
              onClick: handleDelete,
              color: "failure",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ProductsListAdmin;
