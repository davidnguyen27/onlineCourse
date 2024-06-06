import React, { useState } from 'react';
import { Input } from 'antd';
import CourseCard from './CourseCard';
import LiveStreamCard from './LiveStreamCard';

const { Search } = Input;

interface Course {
  title: string;
  description: string;
  views: string;
  date: string;
  price: string;
  rating: number;
  image: string;
}

interface LiveStream {
  name: string;
  status: string;
  avatar: string;
}

const initialCourses: Course[] = [
  {
    title: 'Kiến thức nhập môn IT',
    description: 'Server',
    views: '109k views',
    date: '1 days ago',
    price: '$10',
    rating: 4.5,
    image: 'https://fullstack.edu.vn/courses/lessons-for-newbie', // Replace with actual image URL
  },
  {
    title: 'Lập trình C++ cơ bản, nâng cao',
    description: 'Development | C++',
    views: '5M views',
    date: '1 days ago',
    price: '$5',
    rating: 4.5,
    image: 'https://fullstack.edu.vn/courses/lap-trinh-c-co-ban-toi-nang-cao', // Replace with actual image URL
  },
  {
    title: 'Lập Trình JavaScript Nâng Cao',
    description: 'Development | JS',
    views: '5M views',
    date: '2 days ago',
    price: '$5',
    rating: 5,
    image: 'https://fullstack.edu.vn/courses/javascript-nang-cao', // Replace with actual image URL
  },
];

const initialLiveStreams: LiveStream[] = [
  {
    name: 'Huy',
    status: 'live',
    avatar: 'https://i.pinimg.com/736x/56/3f/0b/563f0b714e90f9195c1d63b09f5fb8e1.jpg', // Replace with actual avatar URL
  },
  {
    name: 'Vinh',
    status: 'live',
    avatar: 'https://i.pinimg.com/564x/9e/d0/98/9ed0980e8545ce6c43591d70e8d729c1.jpg', // Replace with actual avatar URL
  },
  {
    name: 'Hưng',
    status: 'live',
    avatar: 'https://i.pinimg.com/564x/80/95/85/809585a717094287aec2f11456460ba6.jpg', // Replace with actual avatar URL
  },
  {
    name: 'Thế Anh',
    status: 'live',
    avatar: 'https://i.pinimg.com/564x/4d/fc/2b/4dfc2bc2e7ee740e8a6bd0ffbc3bf5a8.jpg', // Replace with actual avatar URL
  },
  {
    name: 'olala',
    status: 'live',
    avatar: 'https://i.pinimg.com/564x/c3/77/ad/c377adecea587192ea4d2fa89cc99e7c.jpg', // Replace with actual avatar URL
  },
  {
    name: 'Dự',
    status: 'live',
    avatar: 'https://i.pinimg.com/564x/0b/d2/03/0bd203e55090d50aded2113ebe6d7ece.jpg', // Replace with actual avatar URL
  },
];

const SearchCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filteredCourses = initialCourses.filter(course =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="p-4">
      <Search
        placeholder="Search for courses"
        onSearch={handleSearch}
        enterButton
        className="mb-4"
      />
      <h2 className="text-xl font-bold mb-4">Live Streams</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {initialLiveStreams.map(stream => (
          <LiveStreamCard key={stream.name} {...stream} />
        ))}
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
