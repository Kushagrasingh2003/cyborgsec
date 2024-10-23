"use client";

import Image from "next/image";
import Link from "next/link";
// import { authenticate } from "@/app/lib/actions";
// import styles from "./loginForm.module.css";
// import { useFormState } from "react-dom";

const RegisterForm = () => {
  // const [state, formAction] = useFormState(authenticate, undefined);

  return (
    // <form action={formAction} className={styles.form}>
    // <form action="" className={styles.form}>
    //   <h1>Login</h1>
    //   <input type="text" placeholder="username" name="username" />
    //   <input type="password" placeholder="password" name="password" />
    //   <button>Login</button>
    //   {/* {state && state} */}
    // </form>
    <>
      <div className="flex md:flex-wrap lg:h-screen lg:items-center justify-around">
        <div className="w-full mt-20  px-4 md:py-12 sm:px-6 py-16 lg:w-1/3 md:ml-24 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>

            <p className="mt-4 text-gray-500">Unlock the doors to your journey in hacking</p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-sm space-y-4">
          <div>
              <label htmlFor="email" className="sr-only">
                Full Name
              </label>

              <div className="">
                <input
                  type="name"
                  className="w-full rounded-lg bg-neutral-200 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Full Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="">
                <input
                  type="email"
                  className="w-full rounded-lg bg-neutral-200 border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
                  className="w-full rounded-lg bg-neutral-200 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Confirm Password
              </label>

              <div className="">
                <input
                  type="password"
                  className="w-full rounded-lg bg-neutral-200 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between ">
             
              <button type="submit" className="inline-block rounded-lg bg-red-700 px-5 py-3 text-sm mt-5 font-medium text-white">
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">
                Already have an account?
                <Link className="underline text-red-700 ml-2  " href="/register">
                  Login In
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="h-64 w-full hidden lg:h-96 lg:w-1/2 md:flex items-center justify-center">
          <Image
            alt=""
            src="/loginPhoto.png"
            width="400"
            height="400"
          
          />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;