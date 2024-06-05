import CourseCard from './CourseCard';

const CourseHorizontal = () => {
  return (
    <section>
      <div className="w-full flex justify-between">
        <h1 className="font-bold">Newest Courses</h1>
        <a href="#">See all</a>
      </div>
      <CourseCard />
    </section>
  );
};

export default CourseHorizontal;
