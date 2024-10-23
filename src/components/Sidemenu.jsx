"use client"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default   function PopoverDemo() {
  const { isAuthenticated } = useKindeBrowserClient();
  // const { isAuthenticated } = getKindeServerSession();
  // const isLoggedIn = await isAuthenticated();
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <h4 variant="ghost" className="flex items-center">
                  Courses <ChevronRight size="xs" className="w-4" />
                </h4>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Link href="/course/6679a68c09e106e8800a1932" className="font-medium leading-none">
                      6 Months Diploma in Cyber Forensics
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link href="/course/66798faa09e106e8800a192f"  className="font-medium leading-none">
                      6 Months Diploma In Cyber Security
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link href="/course/6686e47970323db81a81c0e7"  className="font-medium leading-none">
                      12 Months Diploma In Cyber Security
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link href="/course"  className="font-medium leading-none  text-blue-700 underline">
                      View More
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
          <Link href="/about-us">
            <h4 className="font-medium leading-none">About-us</h4>
            </Link>
          </div>
          <div className="space-y-2">
           <Link href="/directors">
            <h4 className="font-medium leading-none">Directors</h4>
            </Link>
          </div>
          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <h4 variant="ghost" className="flex align-middle items-center">
                  Careers <ChevronRight size="xs" className="w-4" />
                </h4>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Link href="/careers/jobs" className="font-medium leading-none">
                      Jobs
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link href="/careers/placementcell"  className="font-medium leading-none">
                      Placement Cell
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link href="/careers/summertraining"  className="font-medium leading-none">
                      Summer Training
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
          <Link href="#contactUs">
            <h4 className="font-medium leading-none">Contact-Us</h4>
            </Link>
          </div>
          <div className="space-y-2">
           <Link href="/blogs">
            <h4 className="font-medium leading-none">Blogs</h4>
            </Link>
          </div>
          <div className="space-y-2">
           <Link href="/gallery">
            <h4 className="font-medium leading-none">Gallery</h4>
            </Link>
          </div>
          
          <div className="space-y-2">
          { isAuthenticated ?<LogoutLink >Log out</LogoutLink>:""}
            
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
