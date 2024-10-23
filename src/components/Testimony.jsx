import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimony = ({ index }) => {
  console.log(index);
  const data = [
    {
      page: 1,
      id: 1,
      img: "/Jatin_Badhwar.png",
      title: "Jatin Badhwar",
      desc: "Jatin Badhwar, as a professional penetration tester, the curriculum provided an in-depth exploration of advanced hacking techniques and defensive strategies. Hands-on labs and simulations enhanced practical skills, prepared me for real-world ethical hacking scenarios",
      desiganation: "Red Teamer, Bug Bounty Hunter",
    },
    {
      page: 1,
      id: 2,
      img: "/Deepak_Kumar ps.webp",
      title: "Deepak Kumar D3",
      desc: "As a Law enforcement cybersecurity working professional, I can confidently affirm that M Cyber Academy's courses are job oriented. They equip students with practical skills crucial for success in the field of cybersecurity.  Highly recommended for anyone serious about to make their career in cybersecurity.",
      desiganation: "Cyber Intelligence & Digital Forensics Expert, Working with Law Enforcement Agency ",
    },
   
    {
      page: 1,
      id: 3,
      img: "/vaasu_shastri.png",
      title: "Vassu Shastri",
      desc: "M Cyber Academy stands out as a to institution for Cyber Crime Investigation and Digital Forensics training program. Their comprehensive curriculum, led by industry experts, and dedication to practical learning ensures graduates are well-prepared for real-world challenges in this domain",
      desiganation: "Cyber Security Expert, Threat and intelligence operational head at Canera bank",
    },
    {
      page: 2,
      id: 4,
      img: "/Yudhvir_Singh.png",
      title: "Yudhvir Singh",
      desc: "As Director of UIET Department in Maharishi Dayanand University (MDU), Rohtak. After inviting M cyber Academy they organised many cyber threat and awareness sessions in our campus. On the behalf of personal and student engagement in cybersecurity I confidently endorse Cyber Security as a promising career path.",
      desiganation: "Director of UIET, MDU Rohtak.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="py-8">
        <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:pe-0 lg:ps-8 xl:py-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              What Professionals  <br className="md:hidden flex"/> <span className="text-red-700 font-bold text-4xl md:text-5xl">Say About Us</span> 
            </h2>
          </div>
        </div>

        <div className="pt-6 rounded-lg shadow-lg mx-auto max-w-4xl h-auto">
          <Carousel responsive={responsive} className="mx-auto h-auto">
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 border-none  bg-transparent">
                  <div key={index} className="md:px-5 pt-5 w-full h-auto">
                    <Card className=" h-auto">
                      <CardContent className="w-full">
                        <blockquote className="relative rounded-lg flex flex-col md:flex-row shadow-sm text-center md:text-left h-auto md:h-72">
                          <div className="absolute -top-5 md:-top-5 ">
                            <Image
                              src="/colon.webp"
                              alt="Semicolon"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="flex justify-center mb-4 md:mb-0">
                            <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[200px] md:top-12 md:-left-10">
                              <Image
                                src={item.img}
                                alt={item.title}
                                width={150}
                                height={150}
                                className="rounded-full h-full w-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="relative md:mt-5 md:right-10 md:w-72 sm:p-2">
                            <p className="text-sm md:text-xs font-medium text-black opacity-70">
                              {item.desc}
                            </p>
                            <p className="text-xl font-bold text-gray-900 mt-4">
                              {item.title}
                            </p>
                            <p className="text-sm md:text-xs font-medium text-black opacity-70">
                              {item.desiganation}
                            </p>
                          </div>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Testimony;
