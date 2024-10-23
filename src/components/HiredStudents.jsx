// components/HiredStudents.js

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const hiredStudentsData = [
  {
    image: "/Akshay.webp",
    name: "Akshay",
    title: "Intellicar Telematics – Security Engineer.",
    description:
      "Intellicar Telematics: Develop and implement robust security measures for software systems, ensuring protection against vulnerabilities and compliance with industry standards.",
  },

  {
    image: "/Ujwal_Kasturi.png",
    name: "Ujwal Kasturi",
    title: "Arizona state university, Tempe, AZ – Data Security Analyst",
    description:
      "Arizona State University, Tempe, AZ: Analyze and enhance data security systems, implement protocols to protect sensitive information, and ensure compliance with regulations.",
  },
  {
    image: "/Deepak_Kumar.webp",
    name: "Deepak Kumar",
    title: "Seamless InfoTech – Network security engineer",
    description:
      "SAMLESS Infotech: Design and implement network security measures, monitor for vulnerabilities, respond to incidents.",
  },
  {
    image: "/Hardik.png",
    name: "Hardik",
    title: "Telangana Cyber cell - Digital Forensics Investigator",
    description:
      "Telangana Cyber Cell: Conduct digital investigations, analyze electronic evidence, recover data, and provide expert testimony to support cybercrime cases.",
  },
];

const HiredStudents = () => {
  return (
    <div className="my-10 max-w-screen-xl mx-auto">
      <h2 className="text-center text-4xl font-bold ">
        Our  <br className="md:hidden flex"/> <span className="text-red-700 font-bold text-4xl md:text-4xl">Hired Students</span> 
      </h2>
      <div className="mt-8 mx-3 hidden lg:grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hiredStudentsData.map((student, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6"
          >
            <img
              alt={student.name}
              src={student.image}
              className="w-5/6 h-3/5 object-cover mb-4 rounded-2xl"
            />
            <div className="font-bold text-xl mb-2">{student.name}</div>
            <p className="text-xs font-medium uppercase tracking-widest text-pink-700">
              {student.title}
            </p>
            {/* <p className="text-gray-700 text-base mt-4">
              {student.description}
            </p> */}
          </div>
        ))}
      </div>
      <div className="mt-8 mx-auto w-full max-w-md lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {hiredStudentsData.map((student, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <img
                        alt={student.name}
                        src={student.image}
                        className="w-auto h-40 object-contain mb-4 rounded-2xl "
                      />
                      <div className="font-bold text-xl mb-2 text-center">
                        {student.name}
                      </div>
                      <p className="text-sm font-medium uppercase tracking-widest text-pink-700 text-center">
                        {student.title}
                      </p>
                      {/* <p className="text-gray-700 text-base mt-4 text-center">
                        {student.description}
                      </p> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sr-only" />
          <CarouselNext className="sr-only" />
        </Carousel>
      </div>
    </div>
  );
};

export default HiredStudents;
