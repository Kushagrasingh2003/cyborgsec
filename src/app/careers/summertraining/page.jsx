"use client"
import Image from "next/image";
import Form from "@/components/Form";
import { addTraining } from "@/lib/actions";
import MaxWidthWrapper from "@/components/MaxWithWrapper";


export default function Page() {
  return (
    <>
    <MaxWidthWrapper>
      <section>
        <div className="flex justify-center">
          <div className="bg-black w-5/6 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[560px] mx-auto mt-5 rounded-[40px] flex items-center relative">
            <div className="flex-1 flex flex-col justify-center items-start relative p-5 md:p-10">
              <div className="text-white">
                <h1 className="md:text-5xl text-lg font-bold">
                  SUMMER <span className="text-red-700"> TRAINING </span>
                </h1>
                <div className="md:text-5xl text-lg font-extralight mt-3 md:mt-8">
                  <span>Cybersecurity is Our </span>
                  <br/>
                  <span>Purpose. People are Our </span>
                  <br/>
                  <span>Passion.</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
                alt=""
                src="/careerCover.webp"
                width="400"
                height="400"
                className="object-contain"
              />
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
          M Cyber Academy&apos;s summer training programs are created by industry professionals to keep students ahead of the competition. The program addresses the most recent cybersecurity trends and technology, equipping learners with knowledge and practical skills. Get started today!
          </p>
        </div>
        
      </section>
      <div className="bg-gray-50 w-3/4 rounded-lg mx-auto mt-10">
        <Form view="sr-only" textColor="text-black" action={addTraining} />
      </div>
      </MaxWidthWrapper>
    </>
  );
}
