import React from "react";
import { useParams } from "react-router-dom";
import CarouselHome from "../components/home/CarouselHome";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";
import TrendingRow from "../components/home/trendingRow/TrendingRow";
import { getCarouselImages } from "../helpers/homeHelper";
import { trendingMenProducts } from "../data/men";

function Home() {
  const params = useParams();
  const images = getCarouselImages(params.gender);

  return (
    <>
      <CarouselHome images={images} />
      <TrendingRow products={trendingMenProducts} />
      <CategoriesRow />
    </>
  );
}

export default Home;
