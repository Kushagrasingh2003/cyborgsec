import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { fetchUser, fetchUserOrder, fetchCourse } from "@/lib/data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function Page() {
  const { getPermission, getUser, isAuthenticated } = getKindeServerSession();
  const { isLoggedIn } = await isAuthenticated();

  const requestAccess = await getPermission("user-dashboard");
  const userData = await getUser();
  // console.log({userData});
  let order = {};
  let image = "";
  if (userData !== null || undefined) {
    order = await fetchUserOrder(userData.id);
    
    if (order.courseId === "6686e47970323db81a81c0e7") {
      image = "/Banner 2.jpg";
    }
    if (order.courseId === "66798faa09e106e8800a192f") {
      image = "/Banner 1.jpg";
    }
    if (order.courseId === "6679a68c09e106e8800a1932") {
      image = "/Banner 3.jpg";
    }
  }
console.log({image});
  const course = {
    title: "",
    desc: "",
  };

  if (!requestAccess?.isGranted) {
    redirect("/");
  }

  return (
    <>
    <MaxWidthWrapper>
      <div className="flow-root w-3/5 mx-auto">
        <h2 className="font-bold text-2xl my-10">Hi User!</h2>
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          {/* <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
          </div> */}

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {userData.given_name} {userData.family_name}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="text-gray-700 sm:col-span-2">{userData.email}</dd>
          </div>
        </dl>
      </div>

      <h2 className="w-3/5 mx-auto font-bold text-2xl mt-10">
        Enrolled Courses
      </h2>
      {order.map(async (item,index) => {
  if (item.paymentStatus !== "pending") {
    const course = await fetchCourse(item.courseId);
    return (
      <div
        key={item.id}
        className="flex flex-col md:flex-row items-center gap-4 w-full md:w-3/5 mx-auto py-5"
      >
        {/* {item.courseId === "6686e47970323db81a81c0e7" && (
          <Image
            src="/Banner 2.jpg"
            alt=""
            width="200"
            height="100"
            className="rounded-lg object-cover"
          />
        )}
        {item.courseId === "66798faa09e106e8800a192f" && (
          <Image
            src="/Banner 1.jpg"
            alt=""
            width="200"
            height="100"
            className="rounded-lg object-cover"
          />
        )}
        {item.courseId === "6679a68c09e106e8800a1932" && (
          <Image
            src="/Banner 3.jpg"
            alt=""
            width="200"
            height="100"
            className="rounded-lg object-cover"
          />
        )} */}

        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium text-gray-900">
           {index+1} . {course.title}
          </h3>
          <p className="mt-0.5 text-gray-700">{course.desc}</p>
        </div>
      </div>
    );
  }
})}

      {order === null && "Not Enrolled In Courses Yet"}
      </MaxWidthWrapper>
    </>
  );
}
