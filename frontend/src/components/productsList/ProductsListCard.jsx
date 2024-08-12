import React from "react";
import { useNavigate } from "react-router-dom";
import MyRating from "../common/MyRating";

function ProductsListCard({ product, isTrendingCard, isLast }) {
  const navigate = useNavigate();

  function goToDetails() {
    if (isTrendingCard) {
      navigate(`/${product.gender}/${product.category}/${product._id}`);
    } else {
      navigate(product._id);
    }
  }

  return (
    <div
      className={`border-slate-300 border rounded-lg cursor-pointer overflow-hidden ${
        isTrendingCard ? (isLast ? "mr-0" : "mr-3") : ""
      }`}
      onClick={goToDetails}
    >
      {/* Image */}
      <div className="relative h-[240px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt={product.name}
        />
        <MyRating rating={5} className="top-[12px] right-[12px] absolute" />
      </div>
      {/* Info */}
      <div className="flex flex-col gap-1 p-3">
        <h5 className="line-clamp-1 font-semibold text-lg text-slate-900 dark:text-white tracking-tight">
          {product.name}
        </h5>
        <p className="font-semibold text-slate-900 dark:text-white tracking-tight">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductsListCard;
