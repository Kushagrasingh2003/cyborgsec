"use client"
import React, { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { navigate } from "@/lib/ServerActions";
import Link from 'next/link';

const Page = () => {
  
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 w-full max-w-xl text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              className="h-10 w-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Payment Failed!</h1>
        <p className="text-gray-600 mb-8">
          Unfortunately, your payment could not be processed at this time. Please try again or contact support.
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
        
          <Link href="/">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
            Home
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Page