import { Button, Card } from "flowbite-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductsListCard({ product }) {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  console.log("params", params);

  function goToDetails() {
    navigate(product._id);
  }

  function handleAddToCart(e) {
    e.stopPropagation();
    dispatch(addToCart({ ...product, qty: 1 }));
  }

  return (
    <div className="rounded-lg overflow-hidden border" onClick={goToDetails}>
      <div className="h-[200px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <div className="flex items-center my-2">
          {[...Array(5)].map(() => {
            return (
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          })}
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            5.0
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-3xl font-bold text-gray-900 dark:text-white pb-4">
            ${product.price}
          </p>
          <Button onClick={handleAddToCart} size="sm" outline pill>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsListCard;
