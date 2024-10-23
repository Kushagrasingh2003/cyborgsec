import Image from "next/image";

export default function StudentTestimonial({ username, review ,profession,image}) {
  // console.log({image});
  return (
    <>
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 drop-shadow-2xl md:h-80 overflow-y-scroll  ">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            src={image}
            width={50}
            height={50}
            className=" rounded-full"
          />

          <div>
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              {username}
            </p>
            <p>{profession}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 font-light">{review}</p>
      </blockquote>
    </>
  );
}

// export default StudentTestimonial;
