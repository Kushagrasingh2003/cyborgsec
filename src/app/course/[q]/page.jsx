import { Button } from "@/components/ui/button";
import Image from "next/image";
import { fetchCourse,fetchCourseByName } from "@/lib/data";
import LearningMode from "@/components/ui/course/LearningMode";
import CourseFeatures from "@/components/ui/course/CourseFeatures";
import StudentTestimonial from "@/components/StudentTestimonial";
import GuardianTestimonial from "@/components/GuardianTestimonial";
import FAQ from "@/components/Faq";
import Pagination from "@/components/ui/dashboard/pagination/pagination";
import {
  CyberForensic6Months,
  CyberSecurity6Months,
  CyberSecurity12Months,
  CertifiedCyberCrimeInvestigationOfficerCourse6Months,
  Days45CertificationCourseinEthicalHacking,
  JrWhiteHatHackerAdvanced,
  JrWhiteHatHackerIntermidate,
  CertifiedDigitalForensicsInvestigator2MonthCourse,
  MasterLinuxAdministratorCourse,
  MasterPythonProgrammingTraining,
  APT,
  Months3CertificationinEthicalHacking,
  WAPT,
  NetworkingEssentialsCourse,
  CyberCrimeInvestigationOfficerCourse3Months,
  SixmonthscertificationcourseinDigitalforensics,
  SixMonthsCertificationCourseincybersecurity,
} from "@/components/cyberForensic6Months";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  fetchStudenReviews,
  fetchId,
  fetchStudenReviewsMobile,
} from "@/lib/data";
import ImageCarousel from "@/components/company";
import SchoolLogos from "@/components/schoollogo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import TrainingPartners from "@/components/TrainingPartners";
import Modal from "@/components/Modal";
import Joinnow from "@/components/Joinnow";
import HiredStudents from "@/components/HiredStudents";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { addBooking } from "@/lib/actions";
import BookingForm from "@/components/BookingForm";
import FeatureCard from "@/components/FeatureCard";
import { FaQ } from "react-icons/fa6";
import InAssociation from "@/components/Inassociation";

// Mapping course IDs to components
const courseComponents = {
  "6686e47970323db81a81c0e7": CyberSecurity12Months,
  "66798faa09e106e8800a192f": SixMonthsCertificationCourseincybersecurity,
  "6679a68c09e106e8800a1932": SixmonthscertificationcourseinDigitalforensics,
  "66b791d7f0fe0df28f4ca4a5":
    CertifiedCyberCrimeInvestigationOfficerCourse6Months,
  "66b7965ff0fe0df28f4ca4a8": Days45CertificationCourseinEthicalHacking,
  "66b799a4f0fe0df28f4ca4aa": JrWhiteHatHackerIntermidate,
  "66b79ad3f0fe0df28f4ca4ab": JrWhiteHatHackerAdvanced,
  "66b7a051f0fe0df28f4ca4ac": CyberCrimeInvestigationOfficerCourse3Months,
  "66b7a156f0fe0df28f4ca4ad": NetworkingEssentialsCourse,
  "66b7a238f0fe0df28f4ca4ae": WAPT,
  "66b7a623f0fe0df28f4ca4af": Months3CertificationinEthicalHacking,
  "66b7a92af0fe0df28f4ca4b0": APT,
  "66b7aab9f0fe0df28f4ca4b1": MasterPythonProgrammingTraining,
  "66b7ab70f0fe0df28f4ca4b2": MasterLinuxAdministratorCourse,
  "66b7ac43f0fe0df28f4ca4b3": CertifiedDigitalForensicsInvestigator2MonthCourse,
};
const featureData = {
  "66b79ad3f0fe0df28f4ca4ab": [
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Diverse Course Categories",
      title: "Active Learning",
      description:
        " Diverse methods such as group discussions, role-playing, and interactive Activities",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Self-Paced Learning",
      title: " Capstone Projects ",
      description:
        " Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Certified Instructors",
      title: "Certified Instructors",
      description:
        " Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],

  "66b7ac43f0fe0df28f4ca4b3": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Advanced Training",
      description:
        " Become a Cyber Crime investigator specialist with our advanced Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Case Studies ",
      title: "Case Studies ",
      description:
        "Our advanced syllabus also have real cybercrime case studies",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: "Certified Instructors ",
      description: " Train with Cybersecurity Experts.",
    },
  ],
  "66b7a92af0fe0df28f4ca4b0": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training",
      description:
        "Become a Cyber Security Pro With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Capstone Projects ",
      description:
        "Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description:
        " Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "66b7965ff0fe0df28f4ca4a8": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training ",
      description:
        "Become a Cyber Security Pro With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Capstone Projects",
      description:
        "Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description:
        "Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "6679a68c09e106e8800a1932": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: " Advanced Training ",
      description:
        " Become a Cyber Crime investigator specialist with our advanced Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Case Studies  ",
      description:
        " Our advanced syllabus also have real cybercrime case studies.",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: "Certified Instructors",
      description: "Train with Cybersecurity Experts.",
    },
  ],
  "66b7a051f0fe0df28f4ca4ac": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Advanced Training ",
      description:
        "  Become a Cyber Crime investigator specialist with our advanced Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Case Studies  ",
      description:
        " Our advanced syllabus also have real cybercrime case studies.",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description: " Train with Cybersecurity Experts.",
    },
  ],
  "66b791d7f0fe0df28f4ca4a5": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: " Advanced Training ",
      description:
        "Become a Cyber Crime investigator specialist with our advanced Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Case Studies  ",
      description:
        "Our advanced syllabus also have real cybercrime case studies.",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description: " Train with Cybersecurity Experts.",
    },
  ],
  "66798faa09e106e8800a192f": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Diverse Course Categories",
      description:
        "Cybersecurity Threats Evolving? We Have the Courses to Stay Ahead!",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Self-Paced Learning",
      description:
        "Become a Self-Made Security Pro: Start Your Cybersecurity Journey Today!",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: "Certified Instructors",
      description:
        "Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "66b7a623f0fe0df28f4ca4af": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training ",
      description:
        "Become a Cyber Security Pro With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Capstone Projects ",
      description:
        " Our advanced syllabus makes real-world problem-solving projects.",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: "Certified Instructors ",
      description:
        " Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "6686e47970323db81a81c0e7": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Advanced Techniques",
      description: "Master the Latest Techniques in Cybersecurity.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Networking Skills",
      description: "Enhance Your Networking Skills for Better Security.",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: "Ethical Hacking",
      description: "Learn Ethical Hacking to Protect and Defend.",
    },
  ],
  "66b7a156f0fe0df28f4ca4ad": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training",
      description:
        "Become a Network Engineer With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: " Capstone Projects ",
      description:
        "Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description:
        "Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "66b7a238f0fe0df28f4ca4ae": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training",
      description:
        "Become a Network Engineer With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: " Capstone Projects ",
      description:
        "Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description:
        "Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "66b7aab9f0fe0df28f4ca4b1": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training",
      description:
        "Become a Network Engineer With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: " Capstone Projects ",
      description:
        "Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description:
        "Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "66b7ab70f0fe0df28f4ca4b2": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Career-Oriented Training",
      description:
        "Become a Network Engineer With our Career-oriented Training.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: " Capstone Projects ",
      description:
        "Our advanced syllabus makes real-world problem-solving projects",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: " Certified Instructors ",
      description:
        "Get Certified, Get Ahead: Train with Cybersecurity Experts!",
    },
  ],
  "66b799a4f0fe0df28f4ca4aa": [
    // Different set of data for course2
    {
      imageSrc: "/diverse.webp",
      imageAlt: "Advanced Techniques",
      title: "Advanced Techniques",
      description: "Master the Latest Techniques in Cybersecurity.",
    },
    {
      imageSrc: "/self-paced.png",
      imageAlt: "Networking Skills",
      title: "Networking Skills",
      description: "Enhance Your Networking Skills for Better Security.",
    },
    {
      imageSrc: "/certified.webp",
      imageAlt: "Ethical Hacking",
      title: "Ethical Hacking",
      description: "Learn Ethical Hacking to Protect and Defend.",
    },
  ],
  // Add more courses as needed
};
const cfeatureData = {
  "66b7a92af0fe0df28f4ca4b0": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of 5000 fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "6686e47970323db81a81c0e7": [
    {
      imageSrc: "/diverse.webp",
      title: "Hundred Percent Job Assurance Program",
      description: "",
    },
    {
      imageSrc: "/self-paced.png",
      title: " Internship Opportunities with Enforcement Agencies",
      description: "",
    },
    {
      imageSrc: "/certified.webp",
      title:
        "Career support via a dedicated Placement cell alumni network etc.",
      description: "",
    },
    {
      imageSrc: "/certified.webp",
      title: "Practical work Experience through real - world hacking",
      description: "",
    },
  ],
  "66798faa09e106e8800a192f": [
    {
      imageSrc: "/self-paced.png",
      title: "Hundred Percent Job Assurance  Program",
      
    },
    {
      imageSrc: "/self-paced.png",
      title: " Internship Opportunities with Enforcement Agencies",
      description: "",
    },
    {
      imageSrc: "/certified.webp",
      title:
        "Career support via a dedicated Placement cell alumni network etc.",
      description: "",
    },
    {
      imageSrc: "/certified.webp",
      title: "Practical work Experience through real - world hacking",
      description: "",
    },
  ],
  "66b7a156f0fe0df28f4ca4ad": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "66b7965ff0fe0df28f4ca4a8": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "66b79ad3f0fe0df28f4ca4ab": [
    {
      imageSrc: "/diverse.webp",
      title: " Parent’s best choice ",
      description: "Best Cybersecurity course especially for school kids",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "66b7a051f0fe0df28f4ca4ac": [
    {
      imageSrc: "/diverse.webp",
      title: "  Officer’s Best Choice ",
      description:
        " Best Cybersecurity course especially designed for law enforcement professionals ",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Community membership",
      description:
        "Community membership Enhance your skills with the support of 1000+ Professionals",
    },
    {
      imageSrc: "/certified.webp",
      title: " Lifetime Support",
      description: " Lifetime Support for Cyber Crime Updations",
    },
  ],
  "66b7a238f0fe0df28f4ca4ae": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of 5000 fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "66b7aab9f0fe0df28f4ca4b1": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of 5000 fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "66b7ab70f0fe0df28f4ca4b2": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of 5000 fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "6679a68c09e106e8800a1932": [
    {
      imageSrc: "/diverse.webp",
      title: " Officer’s Best Choice ",
      description:
        "Best Cybersecurity course specially designed for law enforcement professionals ",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Community Membership",
      description:
        "Community membership Enhance your skills with the support of 1000+ Professionals",
    },
    {
      imageSrc: "/certified.webp",
      title: "  Lifetime Support",
      description: " Lifetime Support for Cyber Crime Updations.",
    },
  ],
  "66b7a623f0fe0df28f4ca4af": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of 5000 fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],
  "66b791d7f0fe0df28f4ca4a5": [
    {
      imageSrc: "/diverse.webp",
      title: " Officer’s Best Choice ",
      description:
        " Best Cybersecurity course especially designed for law enforcement professionals",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Community membership",
      description:
        "Community membership Enhance your skills with the support of 1000+ Professionals",
    },
    {
      imageSrc: "/certified.webp",
      title: "  Lifetime Support",
      description: "Lifetime Support for Cyber Crime Updations",
    },
  ],
  "66b7ac43f0fe0df28f4ca4b3": [
    {
      imageSrc: "/diverse.webp",
      title: "Internship opportunity ",
      description: " Internship opportunities with law enforcement agencies",
    },
    {
      imageSrc: "/self-paced.png",
      title: "   FTK Provided ",
      description: "  Forensics Tool Kit provided after completion of course ",
    },
    {
      imageSrc: "/certified.webp",
      title: "Community Membership",
      description:
        "Community membership Enhance your skills with the support of 1000+ Professionals",
    },
    {
      imageSrc: "/certified.webp",
      title: " Lifetime Support",
      description: " Lifetime Support for Cyber Crime Updations",
    },
  ],
  "66b799a4f0fe0df28f4ca4aa": [
    {
      imageSrc: "/diverse.webp",
      title: " Community Membership",
      description:
        "Enhance your skills with the support of 5000 fellow learners group.",
    },
    {
      imageSrc: "/self-paced.png",
      title: "  Practical Oriented ",
      description:
        "We have a virtual lab learning program so that you learn it with great interest.",
    },
    {
      imageSrc: "/certified.webp",
      title: "Interactive Activities",
      description:
        "Interactive activities during the course to enhance the soft skills.",
    },
    {
      imageSrc: "/certified.webp",
      title: " Certified Course",
      description: "Boost your career in certified cyber professional course.",
    },
  ],

  // Add more courses as needed
};
const cfeatureDataDesc = {
  "66b7a92af0fe0df28f4ca4b0": [
    {
      title: "Vibrant Hybrid- Learning Platform ",
      description:
        "  M Cyber Academy is your gateway to a thrilling career in cybersecurity. We offer an engaging and dynamic Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "6686e47970323db81a81c0e7": [
    {
      title: " A vibrant Hybrid Learning platform for you",
      description:
        "M Cyber Academy is your gateway to a thrilling career in cybersecurity. We offer an engaging and dynamic hybrid-learning platform packed with Interactive courses, Real-world scenarios, Expert instructors and Vibrant community.",
    },
  ],
  "66798faa09e106e8800a192f": [
    {
      imageSrc: "/diverse.webp",
      title: " A vibrant Hybrid Learning platform for you",
      description:
        "M Cyber Academy is your gateway to a thrilling career in cybersecurity. We offer an engaging and dynamic e-learning platform packed with Interactive courses, Real-world scenarios, Expert instructors, Vibrant community.",
    },
  ],
  "66b7a156f0fe0df28f4ca4ad": [
    {
      imageSrc: "/diverse.webp",
      title: " Vibrant Hybrid- Learning Platform ",
      description:
        "  M Cyber Academy is your gateway to a thrilling career in cybersecurity. We offer an engaging and dynamic Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "66b7965ff0fe0df28f4ca4a8": [
    {
      imageSrc: "/diverse.webp",
      title: "Vibrant Hybrid- Learning Platform ",
      description:
        "M Cyber Academy is your gateway to a thrilling career in cybersecurity. We offer an engaging and dynamic Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "66b79ad3f0fe0df28f4ca4ab": [
    {
      imageSrc: "/diverse.webp",
      title: "Vibrant Learning Hybrid Platform for your Champ/Kid",
      description:
        "Specially designed course by certified industry experts to develop computer skills for kids it is the best course among many parents and will give your child a comprehensive understanding of todays world of computer technology ",
    },
  ],
  "66b7a051f0fe0df28f4ca4ac": [
    {
      imageSrc: "/diverse.webp",
      title:
        " Vibrant Learning Hybrid Platform for Law Enforcement Professionals",
      description:
        "A specialized course by expert cybercrime investigators to help you build computer skills to    solve complex cybercrime cases and reducing risks in cyber-attacks.",
    },
  ],
  "66b7a238f0fe0df28f4ca4ae": [
    {
      imageSrc: "/diverse.webp",
      title: "Vibrant Hybrid- Learning Platform ",
      description:
        " M Cyber Academy is your gateway to a thrilling career in cybersecurity. We offer an engaging and dynamic Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "66b7aab9f0fe0df28f4ca4b1": [
    {
      imageSrc: "/diverse.webp",
      title: " Vibrant Hybrid- Learning Platform ",
      description:
        "M Cyber Academy is your gateway to a thrilling career in Python Programming.  Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "66b7ab70f0fe0df28f4ca4b2": [
    {
      title: " Vibrant Hybrid- Learning Platform ",
      description:
        "M Cyber Academy is your gateway to a thrilling career in Python Programming.  Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "6679a68c09e106e8800a1932": [
    {
      title:
        " Vibrant Learning Hybrid Platform for Law Enforcement Professionals",
      description:
        " A specialized course by expert cybercrime investigators to help you build computer skills to    solve complex cybercrime cases and reducing risks in cyber-attacks. ",
    },
  ],
  "66b7a623f0fe0df28f4ca4af": [
    {
      title: " Vibrant Hybrid- Learning Platform ",
      description:
        "M Cyber Academy is your gateway to a thrilling career in Python Programming.  Hybrid platform packed with Interactive courses, Real-world scenarios, Expert instructors and vibrant community.",
    },
  ],
  "66b791d7f0fe0df28f4ca4a5": [
    {
      title:
        " Vibrant Learning Hybrid Platform for Law Enforcement Professionals",
      description:
        "A specialized course by expert cybercrime investigators to help you build computer skills to    solve complex cybercrime cases and reducing risks in cyber-attacks.",
    },
  ],
  "66b7ac43f0fe0df28f4ca4b3": [
    {
      title:
        " Vibrant Learning Hybrid Platform for Law Enforcement Professionals",
      description:
        "A specialized course by expert cybercrime investigators to help you build computer skills to    solve complex cybercrime cases and reducing risks in cyber-attacks.",
    },
  ],
  "66b799a4f0fe0df28f4ca4aa": [
    {
      title: "Vibrant Learning Hybrid Platform for your Champ/Kid",
      description:
        "Specially designed course by certified industry experts to develop computer skills for kids it is the best course among many parents and will give your child a comprehensive understanding of todays world of computer technology ",
    },
  ],

  // Add more courses as needed
};
const faqData = {
  "66b791d7f0fe0df28f4ca4a5": [
    {
      question: "Who should attend this course?",
      answer:
        "This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators",
    },
    {
      question: "What are the prerequisites for enrolling in this course?",
      answer:
        "Participants are required to have a basic understanding of computer systems, networks, and cybersecurity concepts. Determination and commitment to learning are essential.",
    },
    {
      question: "Is this course available online?",
      answer:
        "Yes, the course is available offline as well as online, providing flexibility for participants to study at their own pace",
    },
    {
      question: "Will I receive certification upon completion of the course?",
      answer:
        "Yes, participants will receive a certificate of completion from M Cyber Academy. Additionally, the course prepares you for industry-recognized certifications in cybercrime investigation.",
    },
    {
      question: "How can I enroll in the Cyber Crime Investigator Course?",
      answer:
        "To enroll, submit your details on demo section or contact for registration details",
    },
    {
      question: "Are there any deadlines for assignments or exams?",
      answer:
        "While suggested timelines are provided, there are no strict deadlines, allowing participants to complete assignments and exams at their convenience.",
    },
  ],
  "6686e47970323db81a81c0e7": [
    {
      question: "Are there any global certifications covered in this course?",
      answer:
        "Yes, After doing this course you will be eligible for many global certifications like EC-Council, Offensive-S Security, RedHat, Comptia, and more.",
    },
    {
      question:
        "Will I receive a certification after completion of this course?",
      answer:
        "Yes, the certificate awarded at the end of the one-year diploma is a recognized qualification that demonstrates cybersecurity expertise. It can enhance your professional profile and become a valuable asset in your career path.",
    },
    {
      question:
        "Does this course provide hacker-meetup tours and real-world projects?",
      answer: "Yes",
    },
    {
      question: "Can I get a job after completing this program?",
      answer:
        "There are many different types of cybersecurity jobs you can pursue after completing the program. The most common cybersecurity jobs include security analyst, security engineer, security consultant, network security engineer, information security analyst, cybersecurity architect, and more.",
    },
    {
      question: "What is the mode of training of the program?",
      answer:
        "This program is typically offered through a combination of in-person and online live training courses to allow for flexibility. You may also have access to hands-on labs and real-world simulations.",
    },
    {
      question: "What are the career prospects after completing the program?",
      answer:
        "After completing the one-year course you are eligible for a job in different sectors such as govt, corporate, and Multi-National Companies ",
    },
    {
      question: "Is this program suitable for beginners in cybersecurity?",
      answer:
        "Yes, this program is designed to cater to both beginners and those with some prior knowledge of cybersecurity. It starts with foundational concepts and progresses to more advanced topics.",
    },
    {
      question:
        "Can I take individual courses from the program without enrolling in the full diploma program?",
      answer:
        "Yes, we offer the option to take individual courses as well as enroll in the full diploma program. This flexibility allows you to tailor your education to your specific needs.",
    },
    {
      question:
        "Can I get assistance with job placement after completing the program?",
      answer:
        "Yes, we have Dedicated placement cell that assists students with job placement, resume building, interview preparation, and networking opportunities within the cybersecurity industry.",
    },
    {
      question:
        "How can I get in touch with the program administrators for further information?",
      answer: "You can contact our executives via phone or email.",
    },
  ],
  "66798faa09e106e8800a192f": [
    {
      question: "Is this program suitable for beginners in cybersecurity?",
      answer:
        "Yes, this program is designed to cater to both beginners and those with some prior knowledge of cybersecurity. It starts with foundational concepts and progresses to more advanced topics",
    },
    {
      question: "What are the career prospects after completing the program?",
      answer:
        "After completing course you are eligible for a job in different sectors such as gov., corporate, and Multinational Companies.",
    },
    {
      question:
        "Can I get assistance with job placement after completing the program?",
      answer:
        "Yes, we have a Dedicated Placement cell for our students that assists students with job placement, resume building, interview preparation, and networking opportunities within the cybersecurity industry.",
    },
    {
      question:
        "How can I contact the program administrators for further information?",
      answer:
        "You can contact our admissions office via phone or email, and our friendly staff will be happy to answer any additional questions you may have. Feel free to adapt and expand upon these questions and answers to suit the specific details of your 6-month Cetification program in cybersecurity.",
    },
    {
      question: "Are there any global certifications covered in this course?",
      answer:
        "Yes, after doing this course you will be eligible for many global certifications like EC-Council, Offensive-Security, CompTIA, and more.",
    },
    {
      question:
        "Will I receive a certification after completion of this course?",
      answer:
        "Yes, the certificate awarded after completion. It can enhance your professional profile and become a valuable asset in your career path",
    },
    {
      question: "Can I get a job after completing this program?",
      answer:
        "You can pursue many types of cybersecurity jobs after completing the program. The most common cybersecurity jobs include security analyst, security engineer, security consultant, network security engineer, information security analyst, cybersecurity architect, and more",
    },
    {
      question: "What is the program's mode of training?",
      answer:
        "This program is typically offered through offline and online through live training classes. You may also have access to hands-on labs and Harware tools.",
    },
    {
      question: "How does this program benefit students?",
      answer:
        "The program offers a shorter duration for gaining valuable cybersecurity knowledge and skills, emphasizes practical skills through hands-on labs, helps students enter the cybersecurity field, and aligns with industry standards and trends.",
    },
    {
      question:
        "Is this program suitable for working professionals seeking career advancement?",
      answer:
        "Yes, it is suitable for working professionals looking to advance their careers in IT or transition into the cybersecurity field, given its relatively short duration and practical focus.",
    },
  ],
  // '66b7a238f0fe0df28f4ca4ae': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // '66b79ad3f0fe0df28f4ca4ab': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  "66b7a051f0fe0df28f4ca4ac": [
    {
      question: "Who should attend this course?",
      answer:
        "This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators.",
    },
    {
      question: "What are the prerequisites for enrolling in this course?",
      answer:
        "Participants are required to have a basic understanding of computer systems, networks, and cybersecurity concepts. Determination and commitment to learning are essential.",
    },
    {
      question: "Is this course available online?",
      answer:
        "Yes, the course is available offline as well as online, providing flexibility for participants to study at their own pace",
    },
    {
      question: "Will I receive certification upon completion of the course?",
      answer:
        "Yes, participants will receive a certificate of completion from M Cyber Academy. Additionally, the course prepares you for industry-recognized certifications in cybercrime investigation.",
    },
    {
      question: "How can I enroll in the Cyber Crime Investigator Course?",
      answer:
        "To enroll, submit your details on demo section or contact for registration details",
    },
    {
      question: "Are there any deadlines for assignments or exams?",
      answer:
        "While suggested timelines are provided, there are no strict deadlines, allowing participants to complete assignments and exams at their convenience.",
    },
  ],
  // '66b7ac43f0fe0df28f4ca4b3': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // '66b7a156f0fe0df28f4ca4ad': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  "6679a68c09e106e8800a1932": [
    {
      question: "Are there any global certifications covered in this course?",
      answer:
        "Yes, After doing this course you will be eligible for many global certifications like EC-Council CEH, Comptia security+, EC – Council CHFI etc.",
    },
    {
      question: "Are there any practical components in the course?",
      answer:
        "Yes, the course includes practical labs and Harware forensics tools to provide participants with real-world experience in digital forensics.",
    },
    {
      question: "Who should enroll in this course?",
      answer:
        "This course is suitable for IT professionals, cybersecurity enthusiasts, law enforcement personnel,and anyone interested in becoming proficient in cyber forensics.",
    },
    {
      question: "Will I receive a certification upon completion of the course?",
      answer:
        "Yes, participants who successfully complete the 6-month Cyber Forensic course will receive a certificate of achievement from M Cyber Academy, validating their expertise in digital forensics",
    },
    {
      question: "Is this program suitable for beginners?",
      answer:
        "Yes, this program is designed to cater to both beginners and those with some prior knowledge of cybersecurity. It starts with foundational concepts and progresses to more advanced topics.",
    },
    {
      question:
        "How does this course prepare me for a career in cyber forensics?",
      answer:
        "This course provides comprehensive knowledge and practical skills required for a successful career in cyber forensics. It also prepares participants for industry-recognized certifications in the field.",
    },
    {
      question:
        "What kind of support is available to participate during this course?",
      answer:
        "Participants have access to technical support, course instructors, and a community of fellow learners for guidance and assistance.",
    },
    {
      question:
        "Can I expect a job placement assistance after completing the course?",
      answer:
        "M Cyber Academy provides career guidance and resources to help participants in their job search, but specific job placement assistance may vary.",
    },
  ],
  // '66b7965ff0fe0df28f4ca4a8': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // '66b7a92af0fe0df28f4ca4b0': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // '66b7a623f0fe0df28f4ca4af': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // '66b7aab9f0fe0df28f4ca4b1': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // '66b7ab70f0fe0df28f4ca4b2': [
  //   {
  //     question: 'Who should attend this course?',
  //     answer: 'This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators',
  //   },
  // ],
  // "66b799a4f0fe0df28f4ca4aa": [
  //   {
  //     question: "Who should attend this course?",
  //     answer:
  //       "This course is only for law enforcement personnel interested in becoming proficient cybercrime investigators",
  //   },
  // ],
};
const Page = async ({ params, searchParams }) => {
  // const { id } = params;
  const { q } = params;
  const page = searchParams?.page || 1;
  const { studenReviews, count } = await fetchStudenReviews("", page, 3);
  const { mobilestudenReviews, mobilecount } = await fetchStudenReviewsMobile(
    "",
    page,
    1
  );

  // const course = await fetchCourse(id);
  const course = await fetchCourseByName(q)
  console.log(course );
  const id = course.id

  const { getUser, isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  let userId = "";
  let coursePrice = "";
  let userArray = {};
  if (isLoggedIn) {
    const userData = await getUser();
    const user = await fetchId();
    userArray = userData;
    console.log({ userArray });
    userId = user;
  }

  // coursePrice = id === "6686e47970323db81a81c0e7" ? "1,20,000" : "60,000";

  const SyllabusComponent = courseComponents[id];
  const features = featureData[id];
  const cfeatures = cfeatureData[id];
  const cfeaturesDesc = cfeatureDataDesc[id];
  const faqs = faqData[id];

  return (
    <>
      <div className="overflow-x-hidden">
        <MaxWidthWrapper>
          <section className="flex justify-center mt-10 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg mx-auto ">
              <div className="flex flex-col gap-8 md:w-3/6 md:mb-16">
                <div className="w-full text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold mt-4 md:mt-10">
                    {course.title}
                  </h1>
                  <p className="font-light text-sm mt-6">{course.desc}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center md:justify-start">
                 
                    <Joinnow
                      content="Join Now"
                      course={course.id}
                      user={userId}
                      firstname={userArray.given_name}
                      lastname={userArray.family_name}
                      email={userArray.email}
                      amount={coursePrice}
                      kindeUserId={userArray.id}
                      mode=""
                    />
                  

                  {id == "66b799a4f0fe0df28f4ca4aa" || id == "66b79ad3f0fe0df28f4ca4ab" ? "" : <Modal desc={course.desc} syllabus={course.syllabus} />}
                  
                </div>
              </div>
              <BookingForm mode={course.title} />
            </div>
          </section>

          <section className="mb-14 mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-center my-8">
              Course Syllabus
            </h2>
            {SyllabusComponent && <SyllabusComponent />}
          </section>

          <section className="px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Choose Your Preferred{" "}
              <span className="text-red-600">Learning Mode</span>
            </h2>
            <div className="mt-6">
              <LearningMode

               // course={course.id}
               // user={userId}
               // firstname={userArray.given_name}
               // lastname={userArray.family_name}
              //  email={userArray.email}
              //  amount={coursePrice}

              />
            </div>
          </section>

          <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-8">
            {features &&
              features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  imageSrc={feature.imageSrc}
                  imageAlt={feature.imageAlt}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
          </div>

          <section className="px-4 mt-10 flex-row">
            <div className="flex flex-col md:flex-row justify-center my-10 md:my-16 gap-8 md:gap-32">
              {cfeatures && <CourseFeatures cfeatures={cfeatures} />}
              <div className="flex flex-col w-full md:w-2/6 mt-8 md:mt-0 justify-center">
                {cfeaturesDesc &&
                  cfeaturesDesc.map((features) => (
                    <>
                      <h2 className="text-3xl md:text-4xl font-semibold text-center">
                        {features.title}
                      </h2>
                      <p className="mt-5 text-sm font-light text-center mx-4">
                        {features.description}
                      </p>
                    </>
                  ))}
              </div>
            </div>
          </section>

          <section className="px-4">
          
          {id== "66b799a4f0fe0df28f4ca4aa" ||
            id == "66b79ad3f0fe0df28f4ca4ab"  ? ""  : <TrainingPartners />}
            {/* <InAssociation/> */}
            {id == "66b799a4f0fe0df28f4ca4aa" ||
            id == "66b79ad3f0fe0df28f4ca4ab" ? (
              <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  What Guardian&apos;s Say
                </h2>
                <div>
                  <div className="hidden mt-8 md:grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <GuardianTestimonial />
                  </div>
                  <div className="hidden md:flex justify-center mt-3">
                    <Pagination count={count} items={3} />
                  </div>
                </div>
                <div>
                  <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 md:hidden">
                    <GuardianTestimonial />
                  </div>

                  <div className="flex md:hidden justify-center mt-3">
                    <Pagination count={mobilecount} items={1} />
                  </div>
                </div>
              </div>
            ) : "" }
            {id == "66b791d7f0fe0df28f4ca4a5" ||
              id == "66b7a051f0fe0df28f4ca4ac" || id == "66b799a4f0fe0df28f4ca4aa" ||
              id == "66b79ad3f0fe0df28f4ca4ab" ? "" 
              : (
              <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  What Student&apos;s Say
                </h2>
                <div>
                  <div className="hidden mt-8 md:grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    {studenReviews.map((item) => (
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
            )}
            <section>
            
              {id== "66b799a4f0fe0df28f4ca4aa" ||
              id == "66b79ad3f0fe0df28f4ca4ab" ? ( 
                <div className="md:mb-10">
              <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
                In Association {" "}
                <span className="text-red-700 font-bold text-3xl md:text-4xl">
                  With
                </span>
              </h2>
              <div className="mx-auto md:w-3/4">
              <SchoolLogos/>
              </div>
            </div>
              ) :""
           }
           {id == "66b7ac43f0fe0df28f4ca4b3" || id== "66b7a051f0fe0df28f4ca4ac" || id=="66b791d7f0fe0df28f4ca4a5" ?
            <>
            <div className="my-10">
            <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
              Associated{" "}
              <span className="text-red-700 font-bold text-3xl md:text-4xl">
                With
              </span>
            </h2>
            <InAssociation/> 
          </div>
          </> : ""
          }
         
            </section>
          </section>

          <section>
            {id == "66b791d7f0fe0df28f4ca4a5" ||
            id == "66b7a051f0fe0df28f4ca4ac" ||
            id == "66b799a4f0fe0df28f4ca4aa" ||
            id == "66b79ad3f0fe0df28f4ca4ab" ? (
              ""
            ) : (
              <HiredStudents />
            )}
          </section>
          <section>
            {/* <FAQ /> */}
            {faqs && (
              <h2 className="text-2xl md:text-3xl font-bold text-center ">
                FAQ
              </h2>
            )}
            {faqs &&
              faqs.map((faq, index) => (
                <>
                  <FAQ
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                </>
              ))}
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Page;
