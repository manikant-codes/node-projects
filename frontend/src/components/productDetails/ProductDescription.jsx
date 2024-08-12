import { Button, Label, Radio } from "flowbite-react";
import React, { useState } from "react";
import { HiHeart, HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import MyRating from "../common/MyRating";

function ProductDescription({ product }) {
  const dispatch = useDispatch();
  const [options, setOptions] = useState({ size: "", color: "" });

  function handleAddToCart() {
    if (!options.size || !options.color) {
      alert("Please select a size and a color.");
      return;
    }
    dispatch(addToCart({ ...product, ...options, qty: 1 }));
  }

  function handleSelect(e) {
    setOptions({ ...options, [e.target.name]: [e.target.value] });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <p className="text-lg text-slate-500">{product.desc}</p>
      </div>
      <div className="flex items-center gap-2">
        <MyRating rating={5} /> | <span>800 Ratings</span>
      </div>
      <div className="flex items-baseline gap-2">
        <p className="flex gap-3 font-bold text-xl">
          <span className="font-normal text-slate-500">MRP</span>
          <span>₹{product.price}</span>
        </p>
        <p className="text-green-700">(inclusive of all taxes)</p>
      </div>
      <div>
        <p className="mb-2 font-bold uppercase">Select Size</p>
        <div className="flex gap-6">
          {product.sizes.map((value, index) => {
            return (
              <div className="flex items-center gap-2">
                <Radio
                  id={value}
                  key={index}
                  name="size"
                  size="xl"
                  value={value}
                  onChange={handleSelect}
                />
                <Label className="text-lg" htmlFor={value}>
                  {value}
                </Label>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 font-bold uppercase">Select Color</p>
        <div className="flex gap-6">
          {product.colors.map((value, index) => {
            return (
              <div className="flex items-center gap-2">
                <Radio
                  id={value}
                  key={index}
                  name="color"
                  size="xl"
                  value={value}
                  onChange={handleSelect}
                />
                <Label className="text-lg" htmlFor={value}>
                  {value}
                </Label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2">
        <Button pill size="sm" onClick={handleAddToCart}>
          <span className="flex items-center gap-1">
            <HiPlus className="w-4 h-4" />
            <span>Add to Cart</span>
          </span>
        </Button>
        <Button pill size="sm" color="gray">
          <span className="flex items-center gap-1">
            <HiHeart className="w-4 h-4" />
            <span>Wish List</span>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProductDescription;
