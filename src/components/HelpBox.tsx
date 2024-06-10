import { CourseHelpProps } from '../models/Types';

const HelpBox: React.FC<CourseHelpProps> = ({ helpData }) => {
  return (
    <div className="text-black p-5">
      <div className="bg-gray-800  p-12 flex justify-center items-center -mt-5 -ml-5 -mr-3">
        <div className=" flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white rounded">{helpData.title}</h2>
          <div className="styles-x-axis search-box">
            <input
              style={{ width: '85%' }}
              type="text"
              placeholder="Search for solutions"
              className="search-item mt-5"
            />
            <i className="fa-solid fa-magnifying-glass search-icon mt-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpBox;
