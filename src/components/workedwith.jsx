import React from 'react';

const WorkedWith = () => {
  const timelineData = [
    { designation: 'Founder and CEO', title: 'M Cyber Academy', description: "Vikash's entrepreneurial spirit led him to establish M Cyber Academy, where he has cultivated an environment of learning and innovation in cybersecurity.", color: 'bg-orange-500' },
    { designation: 'Vice President', title: 'Akhil Bhatia Cyber Suraksha Sangthan, and Haryana', description: "As the Vice President of this esteemed organization, Vikash plays a pivotal role in driving cybersecurity initiatives and advocating for cyber safety measures.", color: 'bg-orange-500' },
    { designation: 'Volunteer', title: 'Cyber Security Professional, i4c', description: "Vikash actively contributes his expertise as a volunteer cyber security professional for i4c, furthering the collective effort to combat cyber threats.", color: 'bg-orange-500' },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold text-center mb-10">Worked With</h2>
      <div className="relative">
        {timelineData.map((item, index) => (
          <div key={index} className={`mb-10 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between`}>
            <div className="w-full md:w-1/2">
              <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className={`w-8 h-8 rounded-full ${item.color} border-2 border-white`}></div>
              </div>
              <div className={`pl-4 pr-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-semibold">{item.designation} - {item.title}</h3>
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

export default WorkedWith;
