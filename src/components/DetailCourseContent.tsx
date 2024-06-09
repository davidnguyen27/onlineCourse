import { useState } from "react";
import CourseBox from "./CourseBox";
import CourseSubTab from "./CourseSubTab";


const DetailCourseContent = () => {
    const [activeTab, setActiveTab] = useState('about');
    return (
        <div>
            <CourseBox
            courseData={{
                title: "Course Tittle",
                description:"Course Description",
              }} 
            />
            <CourseSubTab 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              courseData={{
                content: ['Course Content 1', 'Course Content 2']
              }}
              />
        </div>
    )
}

export default DetailCourseContent;