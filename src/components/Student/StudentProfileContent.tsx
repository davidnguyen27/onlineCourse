import { useState } from "react";
import StudentProfileBox from "./StudentProfileBox";
import StudentProfileSubTab from "./StudentSubTab";


const StudentProfileContent = () => {
    const [activeTab, setActiveTab] = useState('about');
    return (
        <div>
            <StudentProfileBox
            StudentProfileData={{
                title: "Tran Khanh Vinh",
                description: "I'm a developer"
              }} 
            />
            <StudentProfileSubTab 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              />
        </div>
    )
}

export default StudentProfileContent;