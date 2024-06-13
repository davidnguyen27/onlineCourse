import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  views: string;
  date: string;
  price: string;
  rating: number;
  image: string;
  instructor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  views,
  date,
  price,
  rating,
  image,
  instructor
}) => {
  return (
    <article className="h-auto w-auto cursor-pointer rounded-md bg-slate-200 m-2 p-2">
      <div className="p-4">
        <div>
          <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
        </div>
        <div className="my-3 flex justify-between">
          <div>
            <span>{views}</span>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis-vertical cursor-pointer hover:text-amber-500"></i>
          </div>
        </div>
        <h3 className="font-semibold">{title}</h3>
        <div className="my-2">
          <span className="text-xs font-light">{description}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs">
            By <span className="font-medium">{instructor}</span>
          </p>
          <i className="fa-solid fa-cart-plus ml-14 cursor-pointer"></i>
          <span>{price}</span>
        </div>
        <div className="my-2">
          <span className="text-xs font-light">{date}</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-light">Rating: {rating} </span>
          <i className="fa-solid fa-star text-amber-500 ml-1"></i>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
