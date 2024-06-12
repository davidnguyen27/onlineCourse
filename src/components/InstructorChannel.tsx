import React from 'react';
import avatar from '../assets/avt.png';
import { InstructorChannelProps } from '../models/Types';

const InstructorChannel: React.FC<InstructorChannelProps> = ({
  instructor,
  students,
  likes,
  dislikes,
  shares,
}) => {
  return (
    <div className="flex justify-between items-center mt-2 ">
      <div className="flex items-center">
        <img className="w-14 h-14 rounded-full ml-5" src={avatar} alt="Instructor Avatar" />
        <div className="flex flex-col">
          <p className="ml-4 font-semibold text-black rounded text-l">{instructor}</p>
          <button type="button" className="ml-4 py-2 px-4 bg-red-500 text-white rounded">
            Follow
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mr-5">
        <div className="flex flex-col items-center">
          <i className="fas fa-user fa-2x"></i>
          <p>{students}</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-thumbs-up fa-2x"></i>
          <p>{likes}</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-thumbs-down fa-2x"></i>
          <p>{dislikes}</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-share fa-2x"></i>
          <p>{shares}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorChannel;