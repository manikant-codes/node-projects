import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RowTitle from "../../common/RowTitle";
import TrendingCard from "./TrendingCard";
import ProductsListCard from "../../productsList/ProductsListCard";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

function TrendingRow({ products }) {
  if (!products) return null;

  return (
    <div className="p-8 w-full">
      <RowTitle title="Trending" />
      <div>
        <Slider {...settings}>
          {products.map((value, index) => {
            return (
              <ProductsListCard
                key={value.id}
                product={value}
                isTrendingCard
                isLast={index === products.length - 1}
              />
              // <TrendingCard
              //   key={value.id}
              //   product={value}
              //   isLast={index === products.length - 1}
              // />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TrendingRow;
