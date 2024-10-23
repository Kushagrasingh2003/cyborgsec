import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/blog/3D-card";
import Link from "next/link";

export default function HorizontalCard() {
  return (
    <>
      <CardContainer className="inter-var  px-5 md:px-0  w-4/5">
        <CardBody className="bg-gray-50 flex min-w-full justify-around relative   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <Link href="/blogs/667fb69cb9ef8ec0f542df9f">
            <div className="w-full flex justify-between md:gap-32">
              <div className="flex-col ">
                <CardItem
                  as="p"
                  // translateZ="10"
                  className=" text-sm max-w-sm  text-red-700 mt-5"
                >
                  10th Oct 2022
                </CardItem>
                <CardItem
                  // translateZ="10"
                  className="md:text-6xl md:mt-10 font-bold text-neutral-600 dark:text-white"
                >
                  How to position your furniture for positivity
                </CardItem>
                <CardItem
                  //   translateZ="10"

                  as="button"
                  className="px-1 md:mt-20 py-2 rounded-3xl text-sm md:text-lg font-normal text-red-700"
                >
                  View →
                </CardItem>
              </div>
              <div>
                <CardItem
                  // translateZ="10"

                  className="w-full mt-4"
                >
                  <Image
                    src="/director.webp"
                    height="1000"
                    width="1000"
                    className="h-40 w-80 md:h-80 md:w-96 object-fill rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>
            </div>
          </Link>
        </CardBody>
      </CardContainer>
    </>
  );
}
