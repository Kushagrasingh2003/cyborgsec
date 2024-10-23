import Image from "next/image";

const MyComponent = ({title, description,imageName })=> {
  return (
    <>
    <div href="#" className="group relative block h-64 sm:h-80 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed rounded-2xl border-black"></span>

      <div
        className="relative bg-gradient-to-b from-[#FFEFBA] to-[#FFFFFF] flex h-full transform items-end border-2 rounded-2xl  hover:border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 active:group-hover:-translate-x-2 active:group-hover:-translate-y-2"
      >
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8  -webkit-linear-gradient(to right, #fffbd5, #b20a2c)">
        <Image
                  src={`/${imageName}`}
                  width={60}
                  height={60}
                  alt="image"
                />

          <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
        </div>

        <div
          className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
        >
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

          <p className="mt-4 text-sm sm:text-base">
            {description}
          </p>

          {/* <p className="mt-8 font-bold">Read more</p> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default MyComponent;
