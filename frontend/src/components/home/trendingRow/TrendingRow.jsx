import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RowTitle from "../../common/RowTitle";
import TrendingCard from "./TrendingCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

function TrendingRow() {
  return (
    <div className="w-full p-8">
      <RowTitle title="Trending" />
      <Slider {...settings} className="">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </Slider>
    </div>
  );
}

export default TrendingRow;
