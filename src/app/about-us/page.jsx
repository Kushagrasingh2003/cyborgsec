import TrainingPartners from "@/components/TrainingPartners";
import TrustedOrganizations from "@/components/TrustedOrganizations";
import MyComponent from "@/components/myComponent";
import LeadershipSection from "@/components/LeadershipSection";
import ProfileCard from "@/components/ProfileCard";
import AdvisoryCouncil from "@/components/AdvisoryCouncil";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import OurJourney from "@/components/ourjourney";
import ImageCarouselMedia from "@/components/media";

import Image from "next/image";
import Link from "next/link";
import InAssociation from "@/components/Inassociation";

const Page = async () => {
  const heading1 = "Practical, Hands-on learning";

  const description1 =
    "We emphasize project-based learning that allows students to develop offensive and defensive strategies. These straegies ensure that students acquire practical skills and information that can be utilized immediately in the workplace";

  const heading2 = "Collaboration and Community";

  const description2 =
    "We promote a collaborative atmosphere where students may work together, compete in global hacking competitions, and attend cybersecurity events and hacker meetups.";

  const heading3 = "Social Responsibility and Inclusion";

  const description3 =
    "Our goal with the Social Value Partnership Scheme is to close the cybersecurity skills gap by offering free training to underrepresented and impoverished groups such as university graduates, law enforcement veterans, and local communities.";

  const image1 = ["book.webp"];
  const image2 = ["viral-marketing.png"];
  const image3 = ["social-care.png"];
  return (
    <>
      <MaxWidthWrapper className="mx-auto  px-2.5 md:px-20">
        <div className="bg-black w-full md:w-5/6 h-[800px] md:h-[400px] lg:h-[520px] mx-auto mt-10 md:rounded-[40px] flex flex-col justify-center items-center relative">
          <section className="flex mx-auto flex-col justify-center items-center">
            <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-col lg:h-auto lg:items-center justify-center items-center text-center">
              <div className="mx-auto max-w-xl">
                <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                  About
                  <br />
                  <strong className="font-extrabold text-red-700 sm:block">
                    M Cyber Academy
                  </strong>
                </h1>
                <p className="mt-4 text-white sm:text-xl/relaxed">
                  We provide world-class education, in-depth training by
                  professionals, and hands-on experience to equip students for
                  successful jobs in the cybersecurity sector.
                </p>
              </div>
              <div className="mt-10 md:mt-8 flex  justify-center ">
              
                <div className="gap-7 p-5 md:flex grid grid-cols-2">
                  <div
                    style={styles.statItem}
                    className="flex flex-col items-center"
                  >
                    <img
                      src="collaborate.webp"
                      alt="Hiring Partners"
                      style={styles.icon}
                      className="mx-auto"
                    />
                    <p style={styles.statNumber}>100+</p>
                    <p style={styles.statLabel}>HIRING PARTNERS</p>
                  </div>
                  <div
                    style={styles.statItem}
                    className="flex flex-col items-center"
                  >
                    <img src="learner.png" alt="Learners" style={styles.icon} />
                    <p style={styles.statNumber}>5000+</p>
                    <p style={styles.statLabel}>LEARNERS</p>
                  </div>
                  <div
                    style={styles.statItem}
                    className="flex flex-col items-center"
                  >
                    <img
                      src="salary_hike_icon.png"
                      alt="Average Salary Hike"
                      style={styles.icon}
                    />
                    <p style={styles.statNumber}>40-60 %</p>
                    <p style={styles.statLabel}>AVERAGE SALARY HIKE</p>
                  </div>
                
                  <div
                    style={styles.statItem}
                    className="flex flex-col items-center"
                  >
                    <img
                      src="highest_salary_icon.png"
                      alt="Highest Salary"
                      style={styles.icon}
                    />
                    <p style={styles.statNumber}>24</p>
                    <p style={styles.statLabel}>LPA HIGHEST SALARY</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-white h-[20px] w-[20px] rounded-full top-[20px] left-[20px] sm:top-[50px] sm:left-[50px] absolute"></div>
          <div className="bg-white h-[20px] w-[20px] rounded-full top-[20px] right-[20px] sm:top-[50px] sm:right-[50px] absolute"></div>
          <div className="bg-white h-[20px] w-[20px] rounded-full bottom-[20px] left-[20px] sm:bottom-[50px] sm:left-[50px] absolute"></div>
          <div className="bg-white h-[20px] w-[20px] rounded-full bottom-[20px] right-[20px] sm:bottom-[50px] sm:right-[50px] absolute"></div>
        </div>

        <section>
          <h2 className="text-3xl mt-16 text-center font-extrabold sm:text-5xl">
            About Company
          </h2>
          <p className="text-center mx-auto text-black opacity-65 mt-10 max-w-screen-xl sm:text-xl/relaxed">
            M Cyber Academy is a leading tech company specializing in
            cybersecurity training and services. We offer comprehensive online,
            offline, and onsite corporate training programs. Additionally, we
            provide expert penetration testing and digital forensics services
          </p>
          <p className="text-center mx-auto text-black opacity-65 mt-10 max-w-screen-xl sm:text-xl/relaxed">
            M Cyber Academy stands as a distinguished training partner approved
            and accredited by prestigious organizations such as NSDC, and
            NASSCOM work under the Government of India. With ISO 27001:2013
            certification and registration with MSME, we uphold the highest
            standards of quality and excellence in cybersecurity education.
          </p>
          <p className="text-center mx-auto text-black opacity-65 mt-10 max-w-screen-xl sm:text-xl/relaxed">
            Our commitment extends beyond the private sector we proudly serve
            law enforcement agencies. Additionally, we actively contribute to
            social well-being by offering free cyber threat and awareness
            sessions to the public, educational institutes, and government
            sectors.
          </p>
         
        </section>

       
        <TrainingPartners />
        <section>
          <div className="flex flex-col sm:flex-row mx-auto w-5/6 mt-16 sm:mt-20">
            <div className="bg-[#B81D24] w-full sm:w-2/4 h-[400px] sm:h-[500px] lg:h-[560px] mx-auto rounded-[40px] flex flex-col justify-center items-center relative">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-center mt-8 sm:mt-0">
                Our Mission
              </h2>
              <p className="text-center mt-4 sm:mt-12 text-white mx-4 sm:mx-auto max-w-screen-sm text-base sm:text-xl/relaxed">
                To deliver students with world-class cybersecurity education at
                a moderate cost and with no compromise on program quality.
              </p>
              <div className="bg-white h-[20px] w-[20px] rounded-full absolute top-[20px] left-[20px] sm:top-[50px] sm:left-[50px]"></div>
              <div className="bg-white h-[20px] w-[20px] rounded-full absolute top-[20px] right-[20px] sm:top-[50px] sm:right-[50px]"></div>
              <div className="bg-white h-[20px] w-[20px] rounded-full absolute bottom-[20px] left-[20px] sm:bottom-[50px] sm:left-[50px]"></div>
              <div className="bg-white h-[20px] w-[20px] rounded-full absolute bottom-[20px] right-[20px] sm:bottom-[50px] sm:right-[50px]"></div>
            </div>
            <Image
              src="/aboutpage.webp"
              alt="image"
              width="200"
              height="200"
              className="hidden md:flex mx-auto mt-6 sm:mt-0 rounded-[40px] w-full sm:w-auto h-[400px] sm:h-[500px] lg:h-[560px]"
            />
          </div>
        </section>
        <OurJourney />
        <section className="mb-20">
          <h2 className="text-center mt-10 font-extrabold text-3xl ">
            Our <span className="text-[#B81D24]">Leadership</span>
          </h2>

          {/* <LeadershipSection /> */}
          <ProfileCard />
        </section>

        <section className="mb-20">
          <h2 className="text-center my-16   font-extrabold text-3xl sm:text-5xl">
            Our <span className="text-[#B81D24]">Values</span>
          </h2>
          <div className="mx-auto w-5/6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <MyComponent
              title={heading1}
              description={description1}
              imageName={image1}
            />
            <MyComponent
              title={heading2}
              description={description2}
              imageName={image2}
            />
            <MyComponent
              title={heading3}
              description={description3}
              imageName={image3}
            />
          </div>
        </section>
        <section>{/* Training Partners */}</section>
      
        {/* Advisory Council */}
        <section>
          <h2 className="text-center mt-20 font-extrabold text-3xl sm:text-5xl">
            Our <span className="text-[#B81D24]">Advisory</span>{" "}
            <span>Council</span>
          </h2>

          <AdvisoryCouncil />
        </section>

        {/* <TrustedOrganizations /> */}
        {/* <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
              Advisory{" "}
              <span className="text-red-700 font-bold text-3xl md:text-4xl">
                Council
              </span>
            </h2> */}
        {/* <InAssociation /> */}
      </MaxWidthWrapper>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",

    // backgroundColor: '#004d66',
  },
  statItem: {
    textAlign: "center",
    color: "white",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  statNumber: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: "16px",
  },
};

export default Page;
