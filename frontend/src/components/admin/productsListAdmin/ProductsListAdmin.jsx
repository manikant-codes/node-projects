import React, { useEffect, useState } from "react";
import AdminPageTitle from "../../common/AdminPageTitle";
import { Button } from "flowbite-react";
import ProductsListItem from "./ProductsListItem";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../../services/apiServices";

function ProductsListAdmin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data.data);
    });
  }, []);

  function goToAddPage() {
    navigate("add");
  }

  async function handleDelete(id) {
    const response = window.confirm("Are you sure you want to delete this?");
    if (response) {
      await deleteProduct(id);
      alert("Product deleted!");
      const data = await getAllProducts();
      setProducts(data.data);
    }
  }

  if (!products) return null;

  return (
    <div>
      <div className="flex items-center justify-between">
        <AdminPageTitle title="Products" />
        <Button className="h-fit" onClick={goToAddPage}>
          Add Product
        </Button>
      </div>
      <div className="mt-8">
        {products.map((product) => {
          return (
            <ProductsListItem product={product} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsListAdmin;
