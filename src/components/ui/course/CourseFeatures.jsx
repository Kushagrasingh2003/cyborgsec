import Image from "next/image";

const CourseFeatures = ({ cfeatures}) => {
  return (
   
      <div className="flex flex-col gap-6 mx-4">
        {cfeatures.map((cfeature, index) => (
          <blockquote
            key={index}
            className={`rounded-lg bg-gray-50  p-4 drop-shadow-${index % 2 === 0 ? "2xl" : "2xl"} w-full md:w-96 flex gap-6 ${index % 2 === 1 ? "md:ml-16" : ""}`}
          >
            <div className="flex items-center justify-center">
              <Image
                src={cfeature.imageSrc}
                alt={cfeature.title}
                width="80"
                height="80"
              />
            </div>
            <div className="flex-col ">
              <h2 className="font-semibold ">{cfeature.title}</h2>
              {cfeature.description && <p className="mt-2 text-gray-700 text-xs font-light w-3/4">
                {cfeature.description}
              </p>}
            </div>
          </blockquote>
        ))}
      </div>
     
    // </div>
  );
};

export default CourseFeatures;
