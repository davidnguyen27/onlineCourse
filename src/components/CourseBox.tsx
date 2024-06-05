import React, { useState } from 'react';
import coursethumbnail from '../assets/coursethumbnail.jpg';
import coursevideo from '../assets/coursevideo.mp4';

interface CourseBoxProps {
  courseData: {
    title: string;
    description: string;
  };
}

const CourseBox: React.FC<CourseBoxProps> = ({ courseData }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div className="text-black p-5">
      <div className="bg-gray-800 p-12 flex -mt-5 -ml-5 -mr-3">
        <img
          className="cursor-pointer w-64 rounded-lg border-2 border-gray-500"
          src={coursethumbnail}
          alt="Course Thumbnail"
          onClick={showModal}
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-white rounded">{courseData.title}</h2>
          <p className="my-4 text-white rounded">{courseData.description}</p>
          <button type="button" className="mr-4 py-3 px-4 bg-red-500 text-white rounded hover:bg-red-700">
            Add to Cart
          </button>
          <button type="button" className="py-3 px-4 bg-gray-700 text-white rounded border hover:bg-red-500">
            Buy Now
          </button>
        </div>
      </div>
      {visible && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <video width="100%" controls>
                <source src={coursevideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button type="button" className="m-2 p-2 bg-red-500 text-white rounded" onClick={handleOk}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseBox;
