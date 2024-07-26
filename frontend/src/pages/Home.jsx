import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselHome from "../components/home/CarouselHome";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";
import TrendingRow from "../components/home/trendingRow/TrendingRow";
import { getSinglePage } from "../services/apiServices";

function Home() {
  const params = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    getSinglePage(params.gender).then((data) => {
      setPage(data?.data);
    });
  }, [params]);

  console.log(page);

  if (!page) return null;

  return (
    <>
      <CarouselHome images={page.carouselImages} />
      <TrendingRow products={[]} />
      <CategoriesRow categories={page.categories} />
    </>
  );
}

export default Home;
