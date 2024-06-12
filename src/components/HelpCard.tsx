import React from 'react';
import { HelpCardProps } from '../models/Types';

const HelpCard: React.FC<HelpCardProps> = ({ iconClass, title, description }) => {
  return (
    <article className="rounded-md bg-slate-200 mt-10 ml-5 drop-shadow-md w-72 cursor-pointer hover:-translate-y-2 transition ease-out hover:delay-75 hover:shadow-md">
      <div className="p-4 text-center">
        <div className="justify-items-center">
          <i className={iconClass}></i>
        </div>
        <h1 className="font-semibold">{title}</h1>
        <div className="my-2">
          <span className="font-light text-xs">{description}</span>
        </div>
      </div>
    </article>
  );
};

export default HelpCard;