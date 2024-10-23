import MaxWidthWrapper from "@/components/MaxWithWrapper";
import CourseCard from "@/components/courseCard";

export default function course(){
    const coursesPage1 = [
        {
          id: "6679a68c09e106e8800a1932",
          title: "Six Months Diploma Program In Cyber Forensic",
          url:"six-months-diploma-program-in-cyber-forensic",
          image: "/six_months_diploma_progra_ in_cyber_forensics .webp",
        },
        {
          id: "66798faa09e106e8800a192f",
          title: "Six Months Certification Course in cybersecurity",
          url: "six-months-certification-course-in-cybersecurity",
          image: "/six-months-certification-course-in-cybersecurity.webp",
        },
        {
          id: "6686e47970323db81a81c0e7",
          title: "One-Year Diploma Program In Cybersecurity",
          url: "one-year-diploma-program-in-cybersecurity",
          image: "/one-year-diploma-program-in-cybersecurity.webp",
        },
        {
          id: "66b791d7f0fe0df28f4ca4a5",
          title: "Certified Cyber Crime Investigation Officer Course Six Months",
          url: "certified-cyber-crime-investigation-officer-course-six-months",
          image: "/certified-cyber-crime-investigation-officer-course-six-months.webp",
        },
        {
          id: "66b7965ff0fe0df28f4ca4a8",
          title: "45 Days Certification Course in Ethical Hacking",
          url: "45-days-certification-course-in-ethical-hacking",
          image: "/45-days-certification-course-in-ethical-hacking.webp",
        },
        {
          id: "66b799a4f0fe0df28f4ca4aa",
          title: "Jr. White Hat Hacker Intermediate Course",
          url: "jr-white-hat-hacker-intermediate-course",
          image: "/jr-white-hat-hacker-intermediate-course.webp",
        },
        {
          id: "66b79ad3f0fe0df28f4ca4ab",
          title: "Jr. White Hat Hacker Advanced Course",
          url: "jr-white-hat-hacker-advanced-course",
          image: "/jr-white-hat-hacker-advanced-course.webp",
        },
        {
          id: "66b7a051f0fe0df28f4ca4ac",
          title: "Certified Cyber Crime Investigation Officer Course Three Months",
          url: "certified-cyber-crime-investigation-officer-course-three-months",
          image: "/certified-cyber-crime-investigation-officer-course-three-months.webp",
        },
        {
          id: "66b7a156f0fe0df28f4ca4ad",
          title: "Networking Essentials Course",
          url: "networking-essentials-course",
          image: "/networking-essentials-course.webp",
        },
        {
          id: "66b7a238f0fe0df28f4ca4ae",
          title: "Web Application Penetration Testing (WAPT) Course",
          url: "web-application-penetration-testing-course",
          image: "/web_application_penetration_testing.webp",
        },
        {
          id: "66b7a623f0fe0df28f4ca4af",
          title: "Three Months Certification in Ethical Hacking",
          url: "three-months-certification-in-ethical-hacking",
          image: "/three-months-certification-in-ethical-hacking.webp",
        },
        {
          id: "66b7a92af0fe0df28f4ca4b0",
          title: "Advanced Penetration Testing (APT) Course",
          url: "advanced-penetration-testing-course",
          image: "/advanced-penetration-testing-course.webp",
        },
        {
          id: "66b7aab9f0fe0df28f4ca4b1",
          title: "Master Python Programming Course",
          url: "master-python-programming-course",
          image: "/master-python-programming-course.webp",
        },
        {
          id: "66b7ab70f0fe0df28f4ca4b2",
          title: "Master Linux Administrator Course",
          url: "master-linux-administrator-course",
          image: "/master-linux-administrator-course.webp",
        },
        {
          id: "66b7ac43f0fe0df28f4ca4b3",
          title: "Certified Digital Forensics Investigator Two Months Course",
          url: "certified-digital-forensics-investigator-two-months-course",
          image: "/certified-digital-forensics-investigator-two-months-course.webp",
        },
      ];
    return(
        <MaxWidthWrapper>
            <h2 className="text-4xl font-bold text-gray-900 text-center mt-5">
                Our Job <span className="text-red-700 font-bold text-4xl md:text-4xl"> Certified Courses.</span>
              </h2>
            <CourseCard courses={coursesPage1} />
        </MaxWidthWrapper>
    );
}