import React from 'react';

interface LiveStreamCardProps {
  name: string;
  status: string;
  avatar: string;
}

const LiveStreamCard: React.FC<LiveStreamCardProps> = ({ name, status, avatar }) => {
  return (
    <div className="flex-none w-40 h-40 bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mb-2" />
      <p className="text-center">{name}</p>
      <p className="text-red-500">{status}</p>
    </div>
  );
};

export default LiveStreamCard;
