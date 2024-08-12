import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingCard({ product, isLast }) {
  const navigate = useNavigate();

  function goToDetails() {
    // Change gender to page in model and database.
    navigate(`/${product.gender}/${product.category}/${product._id}`);
  }

  return (
    <div
      className={`h-[320px] relative overflow-hidden cursor-pointer rounded-lg border border-slate-300 ${
        isLast ? "mr-0" : "mr-3"
      }`}
      onClick={goToDetails}
    >
      <img
        src={product.images[0]}
        alt="..."
        className="object-top w-full h-full object-cover"
      />
      <div className="right-0 bottom-0 left-0 absolute flex justify-between items-center gap-4 bg-white p-4">
        <p className="line-clamp-1 font-semibold">{product.name}</p>
        <p className="font-semibold">₹{product.price}</p>
      </div>
    </div>
  );
}

export default TrendingCard;
