import InstructorCard from "../instructor/InstructorCard";
import { responsiveItem } from "../../utils/Responsive.carouselitem";
import { Carousel } from "antd";
const CarouselInstructor: React.FC = () => {
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
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
    </Carousel>
  );
};

export default CarouselInstructor;
