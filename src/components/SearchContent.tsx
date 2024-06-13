import React, { useState } from 'react';
import { Input } from 'antd';
import CourseCard from './CourseCard';

const { Search } = Input;

interface Course {
  title: string;
  description: string;
  views: string;
  date: string;
  price: string;
  rating: number;
  image: string;
  instructor: string;
}

const initialCourses: Course[] = [
  {
    title: 'Kiến thức nhập môn IT',
    description: 'Server',
    views: '109k views',
    date: '1 day ago',
    price: '$10',
    rating: 4.5,
    image: 'https://fullstack.edu.vn/courses/lessons-for-newbie', // Replace with actual image URL
    instructor: 'John Doe',
  },
  {
    title: 'Lập trình C++ cơ bản, nâng cao',
    description: 'Development | C++',
    views: '5M views',
    date: '1 day ago',
    price: '$5',
    rating: 4.5,
    image: 'https://fullstack.edu.vn/courses/lap-trinh-c-co-ban-toi-nang-cao', // Replace with actual image URL
    instructor: 'Jane Smith',
  },
  {
    title: 'Lập Trình JavaScript Nâng Cao',
    description: 'Development | JS',
    views: '5M views',
    date: '2 days ago',
    price: '$5',
    rating: 5,
    image: 'https://fullstack.edu.vn/courses/javascript-nang-cao', // Replace with actual image URL
    instructor: 'Alex Johnson',
  },
];

const SearchCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const handleSearch = (value: string) => {
    const filteredCourses = initialCourses.filter(course =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="p-4">
      <div className="search-bar-container mb-4">
        <Search
          placeholder="Search for courses"
          onSearch={handleSearch}
          enterButton
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};

export default SearchCourses;
