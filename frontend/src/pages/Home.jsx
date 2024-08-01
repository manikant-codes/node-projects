import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselHome from "../components/home/CarouselHome";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";
import TrendingRow from "../components/home/trendingRow/TrendingRow";
import {
  // getAllPages,
  getSinglePage,
  getTrendingProducts,
} from "../services/apiServices";

function Home() {
  const params = useParams();
  const [page, setPage] = useState(null);
  const [trendingProducts, setTrendingProducts] = useState(null);
  // const [homePage, setHomePage] = useState(null);

  // useEffect(() => {
  //   getAllPages().then((data) => {
  //     const home =
  //       data.data.find((value) => {
  //         if (value.slug === "home") {
  //           return true;
  //         }
  //         return false;
  //       }) || data.data[0];
  //     setHomePage(home);
  //   });
  // }, []);

  useEffect(() => {
    getSinglePage(params.gender || "home").then((data) => {
      setPage(data?.data);
    });
  }, [params]);

  useEffect(() => {
    getTrendingProducts(params.gender).then((data) => {
      setTrendingProducts(data?.data);
    });
  }, [params]);

  console.log(page);

  if (!page) return null;

  return (
    <>
      <CarouselHome images={page.carouselImages} />
      <TrendingRow products={trendingProducts} />
      <CategoriesRow categories={page.categories} />
    </>
  );
}

export default Home;
