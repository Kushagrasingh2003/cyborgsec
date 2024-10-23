"use client";

import Sidemenu from "./Sidemenu";

import Link from "next/link";
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient  } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu.tsx";
import ListItem from "./ListItem.tsx";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  const { isAuthenticated, isLoading,getUser } = useKindeBrowserClient();
  // const {  getUser,isAuthenticated } = getKindeServerSession();
  // const isLoggedIn = await isAuthenticated();
  
  let userData =  getUser();
  if(userData === null){
    userData="";
  }
  
// hello

  const courses = [
    {
      title: "One-Year Diploma Program In Cybersecurity",
      path: "/course/one-year-diploma-program-in-cybersecurity",
    },
    {
      title: "Six Months Diploma Program In Cyber Forensic",
      path: "/course/six-months-diploma-program-in-cyber-forensic",
    },
    {
      title: "Six Months Certification Course in Cybersecurity",
      path: "/course/six-months-certification-course-in-cybersecurity",
    },
    // {
    //   title: "View More",
    //   path: "/course",
    // },
  ];
  const careers = [
    {
      title: "Jobs",
      path: "/careers/jobs",
    },
    {
      title: "Summer Training",
      path: "/careers/summertraining",
    },
    {
      title: "Placement Cell",
      path: "/careers/placementcell",
    },
  ];


  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto flex h-16 mt-5 max-w-screen-xl px-4 items-center md:gap-8  sm:px-6 lg:px-8">
          <Link className="block text-teal-600 hover:cursor-pointer" href="/">
          <Image src="/logo.png" alt="logo" width="200" height="10"/>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  md:grid-cols-2 lg:w-[600px]">
                    <>
                      {courses.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.path}
                        >
                          <div className="text-sm font-medium leading-none">
                            {component.title}
                          </div>
                        </ListItem>
                      ))}
                      <ListItem href="/course" title="View More" className="text-sm font-medium leading-none text-blue-700 underline">
                      <div className="text-sm font-medium leading-none text-blue-700 underline">
                            View More
                          </div>
                      </ListItem>
                      </>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About-Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/directors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Directors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
                  <NavigationMenuContent >
                    <ul className="  w-[400px] gap-2 p-2 md:w-[100px]  lg:w-[180px] ">
                      {careers.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.path}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contactUs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact-Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                     Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            </div>
            
            {isLoading?<div>Loading...</div>: isAuthenticated?<div className="flex items-center gap-4">
            {/* {isLoggedIn?<div className="flex items-center gap-4"> */}
              <div className="sm:flex mr-4 sm:gap-4">
             <Link
                
                href="/user"
              >
                <Avatar>
  <AvatarImage src={userData.picture}/>
  {/* <AvatarImage src={user.picture}/> */}
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

              </Link>
              <LogoutLink className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-700 transition hover:text-zinc-900 sm:block">Log out</LogoutLink>
              </div>
          </div> :
          <div className="sm:flex mr-4 sm:gap-4">
           
            {/* <LoginLink className="inline-block rounded-lg bg-red-700 px-3 py-3 text-sm font-medium text-white">Sign In</LoginLink> */}

          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
             <div className="md:flex items-center hidden ">
             {/* <RegisterLink className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-700 transition hover:text-zinc-900 sm:block">Sign up</RegisterLink> */}
             <Link href="/login">
            <Button>Sign Up</Button>
          </Link>
             </div>
          </div>}
            
          </div>
          <div className=" justify-end inline-block">
            
             
              <Sidemenu />
            </div>
            
          </div>
       
      </header>
    </>
  )
 
  ;
};

export default Header;
