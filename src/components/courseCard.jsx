import { Button } from "./ui/button";
import Link from "next/link";

const CourseCard = ({ courses }) => {
  return (
    <section id="courses">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-4">
          {courses.map((course) => (
            <div key={course.id} className="mt-2 h-auto">
              <img
                alt={course.title}
                src={course.image}
                className="h-auto w-full rounded-md object-cover"
              />
              <dl>
                <div className="mt-3">
                  <dd className="font-medium">{course.title}</dd>
                </div>
              </dl>
              <Link href={`/course/${course.url}`}>
              {/* <Link href={`/course/${course.id}`}> */}
                <Button className="mt-3">View Course</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
// random text