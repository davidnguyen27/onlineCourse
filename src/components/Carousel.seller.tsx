// CarouselSeller.tsx
import { Carousel } from "antd";
import CourseCard from "./CourseCard";
import { responsiveItem } from "../utils/Responsive.carouselitem";

const courses = [
  {
    title: 'Kiến thức nhập môn IT',
    description: 'Server',
    views: '109k views',
    date: '1 day ago',
    price: '$10',
    rating: 4.5,
    image: 'https://fullstack.edu.vn/courses/lessons-for-newbie',
    instructor: 'John Doe',
  },
  {
    title: 'Lập trình C++ cơ bản, nâng cao',
    description: 'Development | C++',
    views: '5M views',
    date: '1 day ago',
    price: '$5',
    rating: 4.5,
    image: 'https://fullstack.edu.vn/courses/lap-trinh-c-co-ban-toi-nang-cao',
    instructor: 'Jane Smith',
  },
  {
    title: 'Lập Trình JavaScript Nâng Cao',
    description: 'Development | JS',
    views: '5M views',
    date: '2 days ago',
    price: '$5',
    rating: 5,
    image: 'https://fullstack.edu.vn/courses/javascript-nang-cao',
    instructor: 'Alex Johnson',
  },
  // Add more courses if needed
];

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
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
          views={course.views}
          date={course.date}
          price={course.price}
          rating={course.rating}
          image={course.image}
          instructor={course.instructor}
        />
      ))}
    </Carousel>
  );
};

export default CarouselSeller;
