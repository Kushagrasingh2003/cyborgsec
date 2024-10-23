import React from 'react';

const OurJourney = () => {
  const timelineData = [
    { year: '2013', title: 'Collaboration with Prominent Companies', description: 'We collaborated with TCS, NSEIT, Aptech, Meritrac, and Ginger Web Technologies, securing their data servers with technically skilled manpower.', color: 'bg-orange-500' },
    { year: '2014-2016', title: 'Successful Projects', description: 'Everything going well with our projects.', color: 'bg-orange-300' },
    { year: '2017', title: 'Recognized Cybercrime Threat', description: 'Witnessing the rapid increase in cybercrime, we recognized India\'s becoming a cybercrime hub.', color: 'bg-red-400' },
    { year: '2018', title: 'Established ABCSS', description: 'We established the Akhil Bhartiya Cyber Suraksha Sangathan (ABCSS). Our NGO quickly expanded, appointing cyber volunteers in every state across India', color: 'bg-pink-400' },
    { year: '2018', title: 'Achievements of ABCSS', description: 'ABCSS has addressed and resolved over 1000+ complicated cybercrime cases, helped police in many cases, and conducted over 500 awareness sessions for police staff, educational institutions, and corporate entities.', color: 'bg-purple-400' },
    { year: '2023', title: 'Founded M Cyber Academy', description: 'With over a decade of experience in IT and cybersecurity, we founded M Cyber Academy, dedicated to training the next generation of cybersecurity professionals.', color: 'bg-blue-400' },
    { year: 'Present', title: 'Training and Mission', description: 'Till date, we have trained over 5,000 students, many of whom have secured positions in top-notch tech companies. Our mission is to make India cybercrime-free by equipping individuals with the skills needed to thrive in the cybersecurity sector.', color: 'bg-green-400' },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
      <div className="relative">
        {timelineData.map((item, index) => (
          <div key={index} className={`mb-10 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between`}>
            <div className="w-full md:w-1/2">
              <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className={`w-8 h-8 rounded-full ${item.color} border-2 border-white`}></div>
              </div>
              <div className={`pl-4 pr-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-semibold">{item.year} - {item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
            {index < timelineData.length - 1 && (
              <div className="w-full md:w-1/2 relative hidden md:block">
                <div className={`absolute inset-0 flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <div className={`w-full h-24 flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="h-0.5 bg-gray-300 w-full" style={{ clipPath: 'url(#wavy)' }}></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <svg className="hidden">
        <defs>
          <clipPath id="wavy" clipPathUnits="objectBoundingBox">
            <path d="M0,0.5 C0.25,0 0.75,1 1,0.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default OurJourney;
