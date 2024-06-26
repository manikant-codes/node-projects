import React from "react";
import CarouselHome from "../components/home/CarouselHome";
import TrendingRow from "../components/home/trendingRow/TrendingRow";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";

function Home() {
  return (
    <>
      <CarouselHome />
      <TrendingRow />
      <CategoriesRow />
    </>
  );
}

export default Home;
