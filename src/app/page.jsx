import MaxWidthWrapper from "@/components/MaxWithWrapper";
import StudentTestimonial from "@/components/StudentTestimonial";
import TrainingPartners from "@/components/TrainingPartners";
import HiredStudents from "@/components/HiredStudents";
import Testimony from "@/components/Testimony";
import CourseCard from "@/components/courseCard";
import { HeroHighlightDemo } from "../components/heroSection";
import CompanyFeatures from "@/components/CompanyFeatures";
import TrustedOrganizations from "@/components/TrustedOrganizations";

import {
  fetchStudenReviews,
  saveUser,
  fetchUser,
  fetchStudenReviewsMobile,
} from "@/lib/data";

import Pagination from "@/components/ui/dashboard/pagination/pagination";
import Blog from "@/components/Blog";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Alert from "@/components/Alert";
import NumberTicker from "@/components/magicui/number-ticker";
import Link from "next/link";
import ImageCarousel from "@/components/company";
import ImageCarouselMedia from "@/components/media";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";


const Home = async ({ searchParams }) => {
  try {
    const { getPermission, getUser, isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    if (isLoggedIn) {
      const requestAccess = await getPermission("user-dashboard");
      const userData = await getUser();
      const [name, email, userId, isAdmin, phone] = [
        userData.given_name + " " + userData.family_name,
        userData.email,
        userData.id,
        "false",
        "",
      ];

      const user = await fetchUser();
      console.log({ user });
      if (user === undefined || user.length == 0) {
        saveUser({ name, email, userId, isAdmin, phone });
        console.log("saved");
      }
    }
  } catch (err) {
    console.log(err);
  }
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { studenReviews, count } = await fetchStudenReviews(q, page, 3);
  const { mobilestudenReviews, mobilecount } = await fetchStudenReviewsMobile(
    q,
    page,
    1
  );

  const coursesPage1 = [
    {
      id: "6679a68c09e106e8800a1932",
      title: "Six Months Certification in Cyber Forensics",
      url:"six-months-diploma-program-in-cyber-forensic",
      image: "/six_months_diploma_progra_ in_cyber_forensics .webp",
    },
    {
      id: "66798faa09e106e8800a192f",
      title: "Six Months Certification In Cyber Security",
      url: "six-months-certification-course-in-cybersecurity",
      image: "/six-months-certification-course-in-cybersecurity.webp",
    },
    {
      id: "6686e47970323db81a81c0e7",
      title: "One Year Diploma In Cyber Security",
      url: "one-year-diploma-program-in-cybersecurity",
      image: "/one-year-diploma-program-in-cybersecurity.webp",
    },
  ];

  return (
    <>
      <Alert />
      <div className="overflow-x-hidden">
        <MaxWidthWrapper className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          {/* <img src="/homeMain.png" alt="" className="w-full object-cover" /> */}
          
          <div
            className="flex flex-col md:flex-row justify-around bg-cover bg-center"
            style={{ backgroundImage: "url('/homeMain.png')" }}
          >
            <div className="md:w-auto">
              <HeroHighlightDemo />
            </div>
          
            <BookingForm mode="" />
          </div>

          <section className=" mt-10">
            <CompanyFeatures />
          </section>
          {/* section 2 starts from here */}
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 ">
                  Trusted by Students and <br className="md:hidden flex" />{" "}
                  <span className="text-red-700 font-bold text-3xl md:text-4xl">
                    Placement Partners
                  </span>
                </h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                  We allow you to start from scratch and learn from industry
                  professionals. Our comprehensive courses cover everything from
                  fundamental cybersecurity principles to advanced strategies,
                  ensuring you have the knowledge and abilities to succeed in
                  this quickly expanding profession. With hands-on experience
                  and real-world scenarios, you&apos;ll be ready to confidently
                  take on any cybersecurity problem.
                </p>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <Image
                      src="/studentTrained.png"
                      alt="image"
                      width="60"
                      height="60"
                      className="mx-auto"
                    />
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Students trained
                    </dt>
                    <dd className="text-4xl font-extrabold text-[#B81D24] md:text-5xl">
                      <NumberTicker value={5000} />
                      <span>+</span>
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <Image
                      src="/placementPartner.png"
                      alt="image"
                      width="60"
                      height="60"
                      className="mx-auto"
                    />
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Placement Partner
                    </dt>
                    <dd className="text-4xl font-extrabold text-[#B81D24] md:text-5xl">
                      <NumberTicker value={100} />
                      <span>+</span>
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <Image
                      src="/studentRetention.png"
                      alt="image"
                      width="60"
                      height="60"
                      className="mx-auto"
                    />
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Students retention
                    </dt>
                    <dd className="text-4xl font-extrabold text-[#B81D24] md:text-5xl">
                      <NumberTicker value={99} />
                      <span>%</span>
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <Image
                      src="/online-learning.png"
                      alt="image"
                      width="60"
                      height="60"
                      className="mx-auto"
                    />
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Courses And Programs
                    </dt>
                    <dd className="text-4xl font-extrabold text-[#B81D24] md:text-5xl">
                      <NumberTicker value={20} />
                      <span>+</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
          {/* section 2 ends here  */}

          {/* courses section starts from here  */}
          <section>
            <header className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 ">
                Our Top Job{" "}
                <span className="text-red-700 font-bold text-4xl md:text-4xl">
                  {" "}
                  Certified Courses.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-md text-gray-500">
                Here&apos;s a list of our top job Certified courses in
                cybersecurity that will provide you with real life industrial
                knowledge.
              </p>
            </header>
            {/* {courses.map((course)=>{
          })} 
          Use when more course are added , not using now to save image cloud storage
          */}
            <CourseCard courses={coursesPage1} />
          </section>
          {/* courses secction ends here  */}

          {/* training partners */}
          {/* <TrainingPartners /> */}
          <div className="-mx-20">
            <TrustedOrganizations />
          </div>
          {/* training partners section ends here */}

          {/* student review sectioin */}
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
              <h2 className="text-center text-4xl font-bold tracking-tight text-black ">
                What Students <br className="md:hidden flex" />
                <span className="text-red-700 font-bold text-4xl md:text-4xl">
                  Say About Us
                </span>
              </h2>
              <div>
                <div className="hidden mt-8 md:grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                  {studenReviews.map((item) => (
                    <div key={item.id}>
                      {console.log(item.img)}
                      <StudentTestimonial
                        username={item.username}
                        review={item.review}
                        profession={item.profession}
                        image={item.img}
                      />
                    </div>
                  ))}
                </div>
                <div className="hidden md:flex justify-center mt-3">
                  <Pagination count={count} items={3} />
                </div>
              </div>
              <div>
                <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 md:hidden">
                  {mobilestudenReviews.map((item) => (
                    <div key={item.id}>
                      <StudentTestimonial
                        username={item.username}
                        review={item.review}
                        profession={item.profession}
                        image={item.img}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex md:hidden justify-center mt-3">
                  <Pagination count={mobilecount} items={1} />
                </div>
              </div>
            </div>
          </section>
          {/* student review section ends here */}

          {/* placement companies logo */}
          <div className="my-10">
            <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
              Placement{" "}
              <span className="text-red-700 font-bold text-3xl md:text-4xl">
                Partners
              </span>
            </h2>
            <ImageCarousel />
          </div>
          {/* placement companies logos ends here*/}

          {/* placed studets starts from here */}

          <HiredStudents />
          {/* placed studets ends here */}

          <Testimony index={page} />
          {/* Reviews: A testimony to what we do ends here */}
          <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
            Media{" "}
            <span className="text-red-700 font-bold text-3xl md:text-4xl">
              Coverage
            </span>
          </h2>
          <ImageCarouselMedia />
          <section id="blogs">
            <h2 className="mt-28 mb-5 max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Lastest Blogs
            </h2>
            <Blog />
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Home;
