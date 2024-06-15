import { useState } from "react";
import StudentProfileBox from "./StudentProfileBox";
import StudentProfileSubTab from "./StudentSubTab";


const HelpContent = () => {
    const [activeTab, setActiveTab] = useState('about');
    return (
        <div>
            <StudentProfileBox
            StudentProfileData={{
                title: "How may we help you?",
                description: "No no no"
              }} 
            />
            <StudentProfileSubTab 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              />
        </div>
    )
}

export default HelpContent;