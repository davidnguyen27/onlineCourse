import { Carousel } from "antd";

import StudentReview from "./StudentReview";
import { responsiveItem } from "../utils/Responsive.carouselitem";

const CarouselReview: React.FC = () => {
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
      <StudentReview />
      <StudentReview />
      <StudentReview />
      <StudentReview />
      <StudentReview />
    </Carousel>
  );
};

export default CarouselReview;
