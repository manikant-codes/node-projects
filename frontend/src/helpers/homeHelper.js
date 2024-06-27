import { carouselKids } from "../data/kids";
import { carouselMen, trendingMenProducts } from "../data/men";
import { carouselWomen } from "../data/women";

export function getCarouselImages(gender) {
  if (!gender || gender === "men") {
    return carouselMen;
  }

  if (gender === "women") {
    return carouselWomen;
  }

  return carouselKids;
}

export function getTrendingProducts(gender) {
  if (!gender || gender === "men") {
    return trendingMenProducts;
  }

  if (gender === "women") {
    return carouselWomen;
  }

  return carouselKids;
}
