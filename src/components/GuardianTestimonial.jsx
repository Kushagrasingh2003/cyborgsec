import Image from "next/image";

export default function GuardianTestimonial() {
    const reviews = [
        {
          name: "Ajay Bhardwaj",
          title: "Director, Modern Gurukul School",
          review: "As a school director with 20 years of experience in education, I believe every child should take computer technology courses in today's world. My son completed the Junior White Hat Hacker course at M Cyber Academy."
        },
        {
          name: "Monika",
          title: "Telematics, IT Professional",
          review: "As a working professional and a mother of a 6th-grade boy, I see new innovations in technology happening every day. It's important to stay up-to-date with this ever-growing sector. My child was taught not only computer skills but also real-world scenarios. The staff here are very disciplined and polite."
        },
        {
          name: "Joginder Singh",
          title: "Sub-inspector, Haryana Police",
          review: "As a Government Working professional, I've noticed the increasing scams and fraud in the digital world and increasing rapidly. I believe it's crucial to teach our child about cybersecurity. My child successfully completed a 2-month certification course."
        }
      ];
  // console.log({image});
  return (
    <>
    {reviews.map((review,index)=>(
        <blockquote key={index} className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 drop-shadow-2xl md:h-80">
        <div className="flex items-center gap-4">
          {/* <Image
            alt=""
            src=""
            width={50}
            height={50}
            className=" rounded-full"
          /> */}

          <div>
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              {review.name}
            </p>
            <p>{review.title}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 font-light">{review.review}</p>
      </blockquote>
    ))}
      
    </>
  );
}