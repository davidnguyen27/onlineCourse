import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  views: string;
  date: string;
  price: string;
  rating: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, views, date, price, rating, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">{views}</p>
      <p className="text-gray-600">{date}</p>
      <p className="text-green-500">{price}</p>
      <p className="text-yellow-500">Rating: {rating}</p>
    </div>
  );
};

export default CourseCard;
