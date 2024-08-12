import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();
  const params = useParams();
  function goToList() {
    navigate(`/${params.page || "men"}/${category.name}`);
  }

  return (
    <div
      className="relative border-slate-300 border rounded-lg cursor-pointer overflow-hidden group"
      onClick={goToList}
    >
      <div className="h-[320px]">
        <img
          src={category.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        id="title"
        className="group-hover:bg-primary-lighter right-0 bottom-0 left-0 absolute flex flex-col gap-2 bg-[rgba(255,255,255,0.9)] group-hover:opacity-80 p-4 text-center transition-all"
      >
        <p className="font-semibold text-xl">{category.displayName}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
