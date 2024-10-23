
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchJob } from "@/lib/data";
import MaxWidthWrapper from "@/components/MaxWithWrapper";


 const Page = async({params})=> {
  const {id} = params;
  const job = await fetchJob(id);
  return (
    <>
    <MaxWidthWrapper className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="md:mx-36 mx-5 w-5/6">
        <div className="mt-16  flex">
          <div className="flex align-middle items-center">
            {" "}
            <h2 className="font-bold text-xl ">Job Title:</h2>
          </div>
          <div>
            <p className=" ml-3 font-light text-xl">
             {job.title}
            </p>
            
          </div>
        </div>
        <div className="my-2 flex ">
          <div className="flex items-center">
            {" "}
            <h2 className="font-bold text-xl ">Experience: </h2>
          </div>
          <div>
          
          <p className=" font-light text-xl ml-3">
              {job.requirements[0]}
            </p>
            
            
            
          </div>
        </div>
        <div className="my-2 flex">
          <div className="flex items-center">
            {" "}
            <h2 className="font-bold text-xl">Location: </h2>
          </div>
          <div>
            <p className=" font-light text-xl ml-3">
            {job.desc}
            </p>
          </div>
        </div>
        <div className="my-2 mb-6 flex">
          <div className="flex items-center">
            {" "}
            <h2 className="font-bold text-xl">CTC:</h2>
          </div>
          <div>
            <p className=" font-light text-xl ml-3" >
            {job.about}
            </p>
           
          </div>
        </div>
        <Link href="#"><Button>Apply Now</Button></Link>
        
      </div>
      </MaxWidthWrapper>
    </>
  );
}

export default Page;