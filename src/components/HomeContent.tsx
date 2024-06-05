import { Carousel } from 'antd';
import '../styles/customCarousel.css';
import CourseCard from './CourseCard';

const HomeContent = () => {
  return (
    <section>
      <div className="w-full flex justify-between mb-5">
        <h1 className="font-bold">Newest Courses</h1>
        <a href="#">See all</a>
      </div>
      <div className="container mx-auto py-10">
        <Carousel dots={false} slidesToShow={2} slidesToScroll={1} arrows className="custom-carousel">
          <div className="p-2">
            <CourseCard />
          </div>
          <div className="p-2">
            <CourseCard />
          </div>
          <div className="p-2">
            <CourseCard />
          </div>
          <div className="p-2">
            <CourseCard />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeContent;
