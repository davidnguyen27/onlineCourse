import { Carousel } from "antd";
import CourseCard from "./CourseCard";
import { responsiveItem } from "../utils/Responsive.carouselitem";

const courses = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React.",
    views: "1.2k views",
    date: "2023-01-01",
    price: "$49.99",
    rating: 4.5,
    image: "https://via.placeholder.com/150",
    instructor: "John Doe",
  },
  {
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript concepts.",
    views: "3.4k views",
    date: "2023-02-15",
    price: "$59.99",
    rating: 4.8,
    image: "https://via.placeholder.com/150",
    instructor: "Jane Smith",
  },
  {
    title: "Web Development Bootcamp",
    description: "Become a full-stack web developer.",
    views: "5.6k views",
    date: "2023-03-10",
    price: "$99.99",
    rating: 4.7,
    image: "https://via.placeholder.com/150",
    instructor: "Alice Johnson",
  },
  {
    title: "UI/UX Design",
    description: "Learn the fundamentals of UI/UX design.",
    views: "2.8k views",
    date: "2023-04-20",
    price: "$69.99",
    rating: 4.6,
    image: "https://via.placeholder.com/150",
    instructor: "Michael Brown",
  },
  {
    title: "Data Science with Python",
    description: "Introduction to data science using Python.",
    views: "4.1k views",
    date: "2023-05-10",
    price: "$79.99",
    rating: 4.9,
    image: "https://via.placeholder.com/150",
    instructor: "Sarah Wilson",
  },
];

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

export default CarouselCourse;
