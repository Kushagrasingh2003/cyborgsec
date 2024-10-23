import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
 
const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false,
})
// import Header from "../components/Header"

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <>
      <DynamicHeader/>
      <Link href="https://wa.me/919653533324?text='Hello, I want more info about Product'">
      <Image className="fixed md:bottom-10 md:right-10 bottom-5 right-5 z-20" src="/whatsapp.png" alt="whatsapp icon" width="50" height="50" />
      </Link>
      <div
      className={cn(
        "",
        className
      )}
    >
      {children}
      
      
      
    </div>
    {/* <div className="sticky">
    <Image className="sticky" src="/whatsapp.png" alt="whatsapp icon" width="50" height="50" />
    </div> */}
    
    </>
  
  );
};

export default MaxWidthWrapper;
