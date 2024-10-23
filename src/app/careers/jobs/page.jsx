import Image from "next/image";
import ApplyJob from "@/components/ui/jobs/applyjobs";
import Search from "@/components/ui/dashboard/search/search";
import Pagination from "@/components/ui/dashboard/pagination/pagination";
import { fetchJobs } from "@/lib/data";
import MaxWidthWrapper from "@/components/MaxWithWrapper";


const Page = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { jobs, count } = await fetchJobs(q, page);
  return (
    <>
    <MaxWidthWrapper>
      <section>
  <div className="flex justify-center">
    <div className="bg-black w-5/6 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[560px] mx-auto mt-5 rounded-[40px] flex items-center relative">
      <div className="flex-1 flex flex-col justify-center items-start relative p-5 md:p-10">
        <div className="text-white">
          <h1 className="md:text-5xl text-lg font-bold">
            CAREER <span className="text-red-700"> OPPORTUNITIES </span>
          </h1>
          <div className="md:text-5xl text-lg font-extralight mt-3 md:mt-8">
            <span>Cybersecurity is Our </span>
            <br />
            <span>Purpose. People are Our </span>
            <br />
            <span>Passion.</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image alt="" src="/careerCover.jpg" width="400" height="400" className="object-contain"/>
      </div>
      <div className="bg-white h-[20px] w-[20px] rounded-full top-[20px] left-[20px] sm:top-[50px] sm:left-[50px] absolute"></div>
      <div className="bg-white h-[20px] w-[20px] rounded-full top-[20px] right-[20px] sm:top-[50px] sm:right-[50px] absolute"></div>
      <div className="bg-white h-[20px] w-[20px] rounded-full bottom-[20px] left-[20px] sm:bottom-[50px] sm:left-[50px] absolute"></div>
      <div className="bg-white h-[20px] w-[20px] rounded-full bottom-[20px] right-[20px] sm:bottom-[50px] sm:right-[50px] absolute"></div>
    </div>
  </div>
</section>


      <section className="mt-20 mx-8 md:mx-32 text-center">
        <div>
          <p className="text-2xl">
            M Cyber Academy is a prominent educational institution devoted to
            providing students with the skills and information they need to
            succeed in the rapidly evolving cybersecurity profession. Our
            complete approach combines world-class education, in-depth training,
            expert instructors, and hands-on experience to guarantee that
            students are fully equipped for successful careers in cybersecurity.{" "}
          </p>
        </div>
        <div className="mt-16">
          <p className="text-2xl">
            At M Cyber Academy, we put your success first by actively connecting
            you to exciting jobs in the cybersecurity field. Our dedication
            extends to creating an inspirational ecosystem that fosters
            creativity, recognizes talents, and generates opportunities at all
            stages of your career. Our instructional methodology is
            industry-recognized and geared to maximize real-world effects.
          </p>
        </div>
      </section>
      <section className="my-24  md:mx-32  flex-col">
        <div className="flex justify-center">
          <h2 className="text-5xl font-bold">
            Latest <span className="text-red-700">Jobs</span>
          </h2>
        </div>
        <div>
          <div className="mt-16">
            <Search placeholder="Search for a product..." />
          </div>

          {jobs.map((job) => (
            <div className="flex-col mt-8 mx-5 md:mx-0" key={job.id}>
              <ApplyJob title={job.title} id={job.id} />
            </div>
          ))}

          <div className="mt-16">
            <Pagination count={count} />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
    </>
  );
};

export default Page;
