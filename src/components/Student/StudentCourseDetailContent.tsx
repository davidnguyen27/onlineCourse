import { useState } from "react";
import StudentCourseBox from "../Student/StudentCourseBox";
import CourseSubTab from "../Course/CourseSubTab";

const DetailCourseContent = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div>
      <StudentCourseBox
        courseData={{
          title: "Course Tittle",
          description: "Course Description",
        }}
      />
      <CourseSubTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        courseData={{
          content: ["Course Content 1", "Course Content 2"],
        }}
      />
    </div>
  );
};

export default DetailCourseContent;
