"use client"
import React, { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { navigate } from "@/lib/ServerActions";
import Link from 'next/link';

const Page = () => {
  // const proces = useDebouncedCallback(()=>{
  //   navigate();
  //   },10000)
  
  //   useEffect(()=>{
  //     proces();
  //   })
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
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Payment Failed!</h2>
        <p className="text-gray-600 mb-8">
          Unfortunately, your payment could not be processed at this time. Please try again or contact support.
        </p>
        {/* <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="font-medium">Man Chino Trousers</h3>
                <p className="text-gray-500">Qty: 1</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="font-medium">$46.00</p>
              </div>
            </div>
            <div className="border-t pt-2">
              <p className="text-gray-600">Transaction Date: Tuesday, 13th June 2023</p>
              <p className="text-gray-600">Payment Method: Mastercard ending **** 4242</p>
              <p className="text-gray-600">Shipping Method: FedEx Standard Overnight</p>
            </div>
          </div>
        </div> */}
        <div className="mt-8 flex justify-center space-x-4">
        {/* <Link href="">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600">
            Retry Payment
          </button>
          </Link> */}
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