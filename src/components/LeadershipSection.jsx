import Image from "next/image";

const ProfileCard = ({ imageSrc, altText, description, name }) => {
  return (
    <div className="group relative block h-[350px] w-[350px] mx-auto">
      <span className="absolute inset-0 border-2 border-dashed border-black border-opacity-50"></span>
      <div className="relative flex h-full w-full transform items-center justify-center hover:border-2 hover:border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={altText}
            width="100"
            height="100"
            className="h-40 w-40 rounded-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8 bg-white bg-opacity-90">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-black opacity-70">
              {description}
            </p>
            <p className="text-xl font-bold text-black sm:text-2xl mt-4">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  const profiles = [
    {
      imageSrc: "/Vikas.jpg",
      altText: "Vikas Kumar",
      description: "Founder, CEO at M Cyber Academy",
      name: "Vikas Kumar",
    },
    {
      imageSrc: "/pawan.png",
      altText: "Pawan Kumar",
      description: "COO (Chief Operation Officer)",
      name: "Pawan Kumar",
    },
    {
      imageSrc: "/amit.webp",
      altText: "Amit Malhotra",
      description: "CYBER CRIME INVESTIGATION SPECIALIST\n30+ National and International Certifications – CISSP, CEH, CHFI, CCISO, OSCE, MCP, MCSE, MCSA",
      name: "Amit Malhotra",
    },
    {
      imageSrc: "/dalbir.webp",
      altText: "Dalbir Singh",
      description: "Marketing Head",
      name: "Dalbir Singh",
    },
    {
      imageSrc: "/varsha.png",
      altText: "Varsha",
      description: "Sr Sales Manager",
      name: "Varsha",
    },
    {
      imageSrc: "/nishant.png",
      altText: "Nishant",
      description: "Cyber Law and Legal",
      name: "Nishant",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-6">
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {profiles.slice(0, 3).map((profile, index) => (
          <ProfileCard
            key={index}
            imageSrc={profile.imageSrc}
            altText={profile.altText}
            description={profile.description}
            name={profile.name}
          />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {profiles.slice(3).map((profile, index) => (
          <ProfileCard
            key={index}
            imageSrc={profile.imageSrc}
            altText={profile.altText}
            description={profile.description}
            name={profile.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
