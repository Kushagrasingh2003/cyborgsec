"use client";

import Image from "next/image";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../../button";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {

  return (
   
    <>
      <div className="flex md:flex-wrap lg:h-screen lg:items-center justify-around">
        <div className="w-full mt-20  px-4 md:py-12 sm:px-6 py-16 lg:w-1/3 md:ml-24 lg:px-8 lg:py-20 ">
          <div className="mx-auto flex flex-col items-center text-center">
          <Image src="/logo.png" alt="logo" className="flex align-middle items-center justify-center" width="300" height="300"/>

            <p className=" text-gray-500">Continue your journey to the path of success</p>
          </div>

          {/* <form action="#" className="mx-auto mb-0 mt-8 max-w-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>
            

            <div className="flex items-center justify-between ">
            <LoginLink className="inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white" 
             authUrlParams={{
        connection_id: "conn_019058eb89e7ea77f462b7f178302ff5"
      }}>Sign in with Google</LoginLink>
          
           
             
            </div>
            <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">
                Don&apos;t have an account?
                <RegisterLink className="underline text-red-700 ml-2  ">Sign up</RegisterLink>
              
              </p>
            </div>
          </form> */}
          <div className="flex justify-center rounded-lg bg-red-700 px-5 py-3 w-56 mx-auto mt-5">
          <FaGoogle className="flex align-middle items-center justify-center mt-1 text-white mr-2"/>
          <LoginLink className=" flex align-middle items-center text-base font-medium text-white" 
             authUrlParams={{
        connection_id: "conn_0190e05050b4dbda746eac9dc12b0662"
      }}>Sign in with Google</LoginLink>
      </div>
      <div className="flex items-center justify-center mt-2 ">
            <p className="text-sm text-gray-500">
                Don&apos;t have an account?
                <RegisterLink   authUrlParams={{
        connection_id: "conn_0190e05050b4dbda746eac9dc12b0662"
      }} className="underline text-red-700 ml-2  ">Sign up</RegisterLink>
              
              </p>
            </div>
        </div>

        <div className="h-64 w-full hidden lg:h-96 lg:w-1/2 md:flex items-center justify-center">
          <Image
            alt=""
            src="/loginPhoto.png"
            width="400"
            height="400"
          // style={{objectFit:"cover"}}
            // className="h-full w-1/2 object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
