import React from 'react';
import StudentCarousel from './StudentCarousel'

interface StudentProfileSubTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  
}

const StudentProfileSubTab: React.FC<StudentProfileSubTabProps> = ({ activeTab, setActiveTab }) => {
  const AboutTabContent = () => (
    <div>
      <h3 className="font-semibold rounded">Requirements</h3>
      <ul className="list-disc ml-4 text-gray-700 rounded">
        <li>Have a computer with Internet</li>
        <li>Be ready to learn an insane amount of awesome stuff</li>
        <li>Prepare to build real web apps!</li>
      </ul>
      <h3 className="font-semibold">Description</h3>
      <ul className="list-disc ml-4 text-gray-700 ">
        <li>
          Just updated to include Bootstrap 4.1.3! Hi! Welcome to the Web Developer Bootcamp, the only course
          you need to learn web development...
        </li>
      </ul>
      <h3 className="font-semibold ">Who this course is for</h3>
      <ul className="list-disc ml-4 text-gray-700 ">
        <li>
          This course is for anyone who wants to learn about web development, regardless of previous
          experience...
        </li>
      </ul>
      <h3>What you'll learn</h3>
      <ul className="list-disc ml-4 text-gray-700 ">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies elit porttitor, ultrices
          enim a, commodo dolor...
        </li>
      </ul>
    </div>
  );

  const MyCourseTabContent = () => (
    <div className='p-4'>
      <h3 className='font-semibold'>Select a topic to search for help</h3>
      <div className=" justify-items-center">
        <StudentCarousel />
      </div>
    </div>
  );

  return (
    <div className="mt-5">
      <div className="flex justify-self-end font-semibold border-b-2 border-gray-200">
        <button
          type="button"
          className={`py-2 px-4 ${activeTab === 'about' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button
          type="button"
          className={`py-2 px-4 ${activeTab === 'my course' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('my course')}
        >
          My Course
        </button>
      </div>
      <div>
        {activeTab === 'about' && <AboutTabContent />}
        {activeTab === 'my course' && <MyCourseTabContent />}
      </div>
    </div>
  );
};

export default StudentProfileSubTab;
