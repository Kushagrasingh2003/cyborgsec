"use client";
import TrainingPartners from "@/components/TrainingPartners";
import HiredStudents from "@/components/HiredStudents";
import Form from "@/components/Form";
import { addPlacement } from "@/lib/actions";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import ImageCarousel from "@/components/company";

export default function Page() {
  return (
    <>
    
      <MaxWidthWrapper className="overflow-x-hidden">
        {/* heading section */}
        <section className="my-10">
          <div className="flex justify-center">
            {" "}
            <h1 className="text-3xl font-bold">Placement Cell</h1>
          </div>
          <div className="flex flex-col mx-2 md:mx-44 my-5 text-xl">
            <p className="text-center font-light my-5">
              {" "}
              At M Cyber Academy, we are committed to preparing our students for
              successful careers in the cybersecurity field. Our Placement Cell
              is dedicated to providing students with the resources and support
              they require to succeed in their professions. We arrange seminars,
              guest lectures, and other training events to assist students
              improve the skills and information required for their future
              employment.
            </p>
            <p className="text-center font-light my-5">
              We establish links with potential companies and keep touch with
              alumni in order to secure work prospects for students. We advise
              and coach students on job-related issues such as resume writing,
              interview techniques, and career planning. We encourage students
              to connect with alumni, industry leaders, and future employers in
              order to broaden their professional network and improve their
              prospects of finding job.
            </p>
          </div>
        </section>
        {/* form section*/}
        <div className="bg-black md:w-5/6 mx-auto mt-5 md:rounded-[40px] p-8 flex flex-col lg:flex-row justify-center items-center relative">
          <div className="w-full lg:w-1/2 px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="md:text-3xl text-center text-2xl text-white font-extrabold ">
            Placement cell 
              <strong className="font-extrabold text-red-700 sm:block">
              only for M Cyber Academy Students.
              </strong>
            </h1>
          </div>
          <div className="w-full lg:w-1/2  py-8  lg:px-8">
            <Form action={addPlacement} view=""/>
          </div>

          <div className="bg-white h-[20px] w-[20px] rounded-full top-[20px] left-[20px] sm:top-[50px] sm:left-[50px] absolute"></div>
          <div className="bg-white h-[20px] w-[20px] rounded-full top-[20px] right-[20px] sm:top-[50px] sm:right-[50px] absolute"></div>
          <div className="bg-white h-[20px] w-[20px] rounded-full bottom-[20px] left-[20px] sm:bottom-[50px] sm:left-[50px] absolute"></div>
          <div className="bg-white h-[20px] w-[20px] rounded-full bottom-[20px] right-[20px] sm:bottom-[50px] sm:right-[50px] absolute"></div>
        </div>
        <div className="bg-white mt-12 mx-4 mb-6 rounded-lg drop-shadow-2xl max-w-sm md:mx-auto p-4">
          <div className="flex items-center">
            <img
              src="/pawan.png"
              alt="Pawan Kumar"
              className="h-40 w-40 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="font-bold text-xl text-gray-900">Pawan Kumar</h2>
              <h3 className="text-gray-600">Placement Head</h3>
              <h4 className="text-gray-600">Chief Operations Officer</h4>
            </div>
          </div>
          {/* <div className="mt-4 text-gray-600">
            <h5 className="font-medium">8607880813,9653533334</h5>
         
          </div> */}
          <div className="mt-1 text-gray-600">
           
            <h5 className="font-medium">pawan.kumar@mcyberacademy.com</h5>
          </div>
        </div>
        {/* company section  */}
        <section>
          {/* <TrainingPartners /> */}
          <div className="">
              <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
                Placement{" "}
                <span className="text-red-700 font-bold text-3xl md:text-4xl">
                  Partners
                </span>
              </h2>
              <div className="mx-auto md:w-3/4">
                <ImageCarousel />
              </div>
            </div>
        </section>
        {/*  placed students */}
        <section className="md:mx-44">
          <HiredStudents />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
