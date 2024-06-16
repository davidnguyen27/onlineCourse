import { Carousel } from "antd";
import CourseCard from "../Course/CourseCard";

import "../../styles/customCarousel.css";

import { responsiveItem } from "../../utils/Responsive.carouselitem";

const CarouselSeller = () => {
  return (
    <Carousel
      className="custom-carousel"
      dots={false}
      slidesToShow={4}
      slidesToScroll={1}
      arrows
      infinite
      swipeToSlide
      responsive={responsiveItem}
    >
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Carousel>
  );
};

export default CarouselSeller;
