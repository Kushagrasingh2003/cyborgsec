import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/blog/3D-card";
import Link from "next/link";


export default  function BlogCard({img,title,slug}) {

  return (
    <>
      <CardContainer className="inter-var  px-5 md:px-0  md:w-80  w-4/5">
        <CardBody className="bg-gray-50 md:h-80  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        {/* <Link href={`/blogpost/${slug}`}> */}
          <Link href={`/blogs/${slug}`}>
          <CardItem
            translateZ="50"
            //   rotateX={20}
            //   rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              // src="/director.webp"
              src={img}
              height="1000"
              width="1000"
              className="h-40 w-full object-fill rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <CardItem
            translateZ="60"
            className="text-xl mt-3 font-bold text-neutral-600 dark:text-white"
          >
            {/* How to position your furniture for positivity */}
            {title}
          </CardItem>
          <div className="flex justify-between items-center mt-5 md:mt-5">
            <CardItem
              translateZ={50}
              translateX={-20}
              as="button"
              className="px-1 py-2 rounded-xl text-xs font-normal text-red-700"
            >
              View →
            </CardItem>
          </div>
          </Link>
        </CardBody>
      </CardContainer>
    </>
  );
}
