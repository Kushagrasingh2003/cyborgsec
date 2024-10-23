// import Image from "next/image";

// const ProfileCard = ({ imageSrc, altText, description, name }) => {
//   return (
//     <div  className="group relative block h-[350px] w-[350px] mx-auto">
//       <span className="absolute inset-0 border-2 border-dashed border-black border-opacity-50"></span>
//       <div className="relative flex h-full w-full transform items-center justify-center hover:border-2 hover:border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
//         <div className="relative w-full h-full">
//           <Image
//             src={imageSrc}
//             alt={altText}
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8 bg-white bg-opacity-90">
//           <div className="text-center">
//             <p className="text-sm font-medium uppercase tracking-widest text-black opacity-70">
//               {description}
//             </p>
//             <p className="text-xl font-bold text-black sm:text-2xl mt-4">
//               {name}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AdvisoryCouncil = () => {
//   return (
//     <>
//       <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
//           <ProfileCard
//             imageSrc="/Sadashiv_Hiremath.png"
//             altText="Mr. Sadashiv Hiremath"
//             description="Regional HSEHead India & SEA at Foseco, Ex. Hse Head India at Bosch Limited."
//             name="Mr. Sadashiv Hiremath"
//           />
//           <ProfileCard
//             imageSrc="/Himanshu_Kumar.png"
//             altText="Mr. Himanshu Kumar"
//             description="Founder at Dominfosec | Cyber Security, VAPT, Bug Bounty, Red Teaming."
//             name="Mr. Himanshu Kumar"
//           />
//           <ProfileCard
//             imageSrc="/Amit_Mahlotra.webp"
//             altText="Mr. Amit Mahlotra"
//             description="Cyber Crime Investigation Specialist | 30+ National and International Certifications: CISSP, CEH, CHFI, CCISO, OSCE, MCP, MCSE, MCSA"
//             name="Mr. Amit Mahlotra"
//           />
//         </div>
//         <div className="mt-12 flex justify-center">
//           <div className="max-w-[1140px] w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
//             <ProfileCard
//               imageSrc="/Minderjeet_Yadav.png"
//               altText="Mr. Minderjeet Yadav"
//               description="High Court Judge, Chandigarh, EX. Chairman of bar council Punjab & Haryana high court, Ex. Deputy Advocate General, Haryana"
//               name="Mr. Minderjeet Yadav"
//             />
//             <ProfileCard
//               imageSrc="/Deepak_Kumar ac.webp"
//               altText="Mr. Deepak Kumar"
//               description="Cyber Intelligence & Digital Forensics, Cyber Dost (I4C) Sr Cyber Intelligence & Digital Forensics Professional, more than 15 years of experience in Cyber intelligence and digital forensics."
//               name="Mr. Deepak Kumar"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdvisoryCouncil;

import { position } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ imageSrc, altText, name, desc }) => {
  return (
    <>
      <Image
        src={imageSrc}
        alt={altText}
        style={styles.avatar}
        width="100"
        height="100"
        className="h-40 w-40 rounded-full object-cover"
      />
      <h2 style={styles.name}>{name}</h2>
      <h3 style={styles.title}>{desc}</h3>
    </>
  );
};

const AdvisoryCouncil = () => {
  const profiles = [
    {
      imageSrc: "/Minderjeet_Yadav.png",
      altText: "Minderjeet Yadav",
      description:
        "High Court Judge, Chandigarh, EX. Chairman of Bar Council Punjab & Haryana high court, Ex. Deputy Advocate General, Haryana",
      name: "Minderjeet Yadav",
    },
    {
      imageSrc: "/Deepak_Kumar ac.webp",
      altText: "Dr. Deepak Kumar",
      description:
        "Cyber Intelligence & Digital Forensics Expert, Working with Law Enforcement Agency ",
      name: "Dr. Deepak Kumar",
    },
    {
      imageSrc: "/Sadashiv_Hiremath.png",
      altText: "Sadashiv Hiremath",
      description:
        "Regional HSE Head India & SEA at Foseco, Ex. Hse Head India at Bosch Limited.",
      name: "Sadashiv Hiremath",
    },
    {
      imageSrc: "/Himanshu_Kumar.png",
      altText: "Mr. Himanshu Kumar",
      description:
        "Cyber Security Expert, Founder at Dom InfoSec , Hall of Fame – Google, Twitter, Uber, Netflix",
      name: "Himanshu Kumar",
    },
   
   
   
  ];

  return (
    <>
      <div className=" mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:flex md:flex-col">
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {profiles.slice(0, 3).map((profile, index) => (
            <>
              <div style={styles.card} className="mx-auto">
                <Card
                  key={index}
                  imageSrc={profile.imageSrc}
                  altText={profile.altText}
                  name={profile.name}
                  desc={profile.description}
                />
              </div>
            </>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4  md:gap-8 md:mx-auto">
          {profiles.slice(3).map((profile, index) => (
            <>
            {/* <div className="flex justify-center"> */}
            {/* <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"> */}
              <div style={styles.card} className="mx-auto ">
                <Card
                  key={index}
                  imageSrc={profile.imageSrc}
                  altText={profile.altText}
                  name={profile.name}
                  desc={profile.description}
                />
              </div>
              {/* </div> */}
              {/* </div> */}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  card: {
    width: "300px",
    // marginRight: "20px",
    // marginLeft: "80px",
    marginTop: "80px",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f3f3",
    
    height: "230px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "10px",
    position: "relative",
    bottom: "60px",
    left: "80px",
  },
  name: {
    fontSize: "1.5em",
    margin: "10px 0",
    position: "relative",
    bottom: "50px",
  },
  title: {
    fontSize: "1em",
    color: "#666",
    margin: "10px 0",
    position: "relative",
    bottom: "50px",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
  },
  linkedinIcon: {
    width: "30px",
    height: "30px",
  },
};

export default AdvisoryCouncil;
