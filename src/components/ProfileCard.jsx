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
      {/* <Link
        href="https://www.linkedin.com/in/suresh-rao" 
        style={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
          alt="LinkedIn" 
          style={styles.linkedinIcon} 
        />
      </Link> */}
    </>
  );
};

const ProfileCard = () => {
  const profiles = [
    {
      imageSrc: "/amit.webp",
      altText: "Amit Malhotra",
      description:
        "Senior Cyber Crime Investigation Officer, Ex. Microsoft, Ex. IBM, Founder of Akhil Bhartiya Cyber Surksha Sangathan",
      name: "Dr. Amit Malhotra",
    },
    {
      imageSrc: "/Vikas.jpg",
      altText: "Vikash Kumar",
      description: "Cyber Security Analyst and Researcher, Vice President (hr.) at Akhil Bhartiya Cyber Surksha Sangathan.",
      name: "Vikash Kumar",
    },
    {
      imageSrc: "/pawan.png",
      altText: "Pawan Kumar",
      description: "Certified Ethical Hacker, Ex.Network Security at Bosch Limited",
      name: "Pawan Kumar",
    },
    
    {
      imageSrc: "/dalbir.webp",
      altText: "Dalbir Singh",
      description: "MD (Marketing Director ), Ex. Regional marketing head at Modi Care",
      name: "Dalbir Singh",
    },
    
    {
      imageSrc: "/nishant.png",
      altText: "Nishant",
      description: "Cyber Laws and legal Advocate at High Court, Chandigarh",
      name: "Nishant",
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
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {profiles.slice(3).map((profile, index) => (
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
      </div>
    </>
  );
};

// {
//   <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
// {profiles.slice(3).map((profile, index) => (
//   <>
//     key={index}
//     <Image
//       src={profile.imageSrc}
//       alt={profile.altText}
//       style={styles.avatar}
//       width="100"
//       height="100"
//     />
//     <h2 style={styles.name}>Suresh Rao</h2>
//     <h3 style={styles.title}>Executive Director Corporate Solutions</h3>
//     <Link
// href="https://www.linkedin.com/in/suresh-rao" 
// style={styles.link}
// target="_blank"
// rel="noopener noreferrer"
// >
// <Image
//   src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
//   alt="LinkedIn" 
//   style={styles.linkedinIcon} 
// />
// </Link>
//   </>
// ))}
// </div> 
// }

const styles = {
  card: {
    width: "300px",
    // marginRight: "20px",
    // marginLeft: "80px",
    marginTop: "80px",
    marginBottom:"30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f3f3",
    position:"relative",
    height:"220px"
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "10px",
    position:"relative",
    bottom:"60px",
    left:"80px"
  },
  name: {
    fontSize: "1.5em",
    margin: "10px 0",
    position:"relative",
    bottom:"50px"
  },
  title: {
    fontSize: "1em",
    color: "#666",
    margin: "10px 0",
    position:"relative",
    bottom:"50px",
    marginBottom:"20px"
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

export default ProfileCard;
