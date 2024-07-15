import React from "react";
import { useParams } from "react-router-dom";
import CarouselHome from "../components/home/CarouselHome";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";
import TrendingRow from "../components/home/trendingRow/TrendingRow";
import {
  getCarouselImages,
  getCategories,
  getTrendingProducts,
} from "../helpers/homeHelper";

function Home() {
  const params = useParams();
  const carouselImages = getCarouselImages(params.gender);
  const trendingProducts = getTrendingProducts(params.gender);
  const categories = getCategories(params.gender);

  return (
    <>
      <CarouselHome images={carouselImages} />
      <TrendingRow products={trendingProducts} />
      <CategoriesRow categories={categories} />
    </>
  );
}

export default Home;
