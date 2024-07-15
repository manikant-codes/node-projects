import { Button } from "flowbite-react";
import React from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function ProductsListItem({ product, handleDelete }) {
  const navigate = useNavigate();

  function goToEditPage() {
    navigate(`/admin/products/${product._id}`);
  }

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-14 h-14 rounded-full overflow-hidden">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grow-[1]">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>{product.desc}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button pill onClick={goToEditPage}>
          <HiPencil />
        </Button>
        <Button
          pill
          onClick={() => {
            handleDelete(product._id);
          }}
        >
          <HiTrash />
        </Button>
      </div>
    </div>
  );
}

export default ProductsListItem;
