import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselHome from "../components/home/CarouselHome";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";
import TrendingRow from "../components/home/trendingRow/TrendingRow";
import { getSinglePage, getTrendingProducts } from "../services/apiServices";

function Home() {
  const params = useParams();
  const [page, setPage] = useState(null);
  const [trendingProducts, setTrendingProducts] = useState(null);

  useEffect(() => {
    getSinglePage(params.page || "home").then((data) => {
      setPage(data?.data);
    });
  }, [params]);

  useEffect(() => {
    getTrendingProducts(params.page).then((data) => {
      setTrendingProducts(data?.data);
    });
  }, [params]);

  if (!page) return null;

  return (
    <>
      <CarouselHome images={page.carouselImages} />
      {trendingProducts && trendingProducts.length && (
        <TrendingRow products={trendingProducts} />
      )}
      <CategoriesRow categories={page.categories} />
    </>
  );
}

export default Home;
