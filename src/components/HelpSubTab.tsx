import React from 'react';
import HelpCard from './HelpCard';

interface HelpSubTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  helpData: {
    
  };
}

const HelpSubTab: React.FC<HelpSubTabProps> = ({ activeTab, setActiveTab, helpData }) => {
  const InstructorTabContent = () => (
    <div className='p-4'>
      <h3 className='font-semibold'>Select a topic to search for help</h3>
      <div className="flex flex-wrap justify-evenly">
        <HelpCard
          iconClass="fa-sharp fa-solid fa-wallet"
          title="Payment"
          description="Web development"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-user"
          title="Account"
          description="User settings"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        {/* Add more HelpCard components as needed */}
      </div>
    </div>
  );

  const StudentTabContent = () => (
    <div className='p-4'>
      <h3 className='font-semibold'>Select a topic to search for help</h3>
      <div className="flex flex-wrap justify-evenly">
        <HelpCard
          iconClass="fa-sharp fa-solid fa-wallet"
          title="Payment"
          description="Web development"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-user"
          title="Account"
          description="User settings"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        <HelpCard
          iconClass="fa-sharp fa-solid fa-life-ring"
          title="Support"
          description="Customer support"
        />
        {/* Add more HelpCard components as needed */}
      </div>
    </div>
  );

  return (
    <div className="mt-5">
      <div className="flex justify-center font-semibold border-b-2 border-gray-200">
        <button type="button" className={`py-2 px-4 ${activeTab === 'instructor' ? 'bg-gray-200' : ''}`} onClick={() => setActiveTab('instructor')}>Instructor</button>
        <button type="button" className={`py-2 px-4 ${activeTab === 'student' ? 'bg-gray-200' : ''}`} onClick={() => setActiveTab('student')}>Student</button>
      </div>
      <div>
        {activeTab === 'instructor' && <InstructorTabContent />}
        {activeTab === 'student' && <StudentTabContent />}
      </div>
    </div>
  );
};

export default HelpSubTab;
