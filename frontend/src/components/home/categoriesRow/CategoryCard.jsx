import { Button } from "flowbite-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();
  const params = useParams();
  function goToList() {
    navigate(`/${params.gender || "men"}/category`);
  }

  return (
    <div className="border" onClick={goToList}>
      <div className="h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold">T-Shirt</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi
          nam ab nostrum nihil earum.
        </p>
        <Button pill>Shop Now</Button>
      </div>
    </div>
  );
}

export default CategoryCard;
