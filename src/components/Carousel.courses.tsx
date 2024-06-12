import { Carousel } from "antd";
import CourseCard from "./CourseCard";
import { responsiveItem } from "../utils/Responsive.carouselitem";

const CarouselCourse = () => {
  return (
    <Carousel
      className="custom-carousel"
      dots={false}
      slidesToScroll={1}
      slidesToShow={4}
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

export default CarouselCourse;
