"use client"
import React, { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { navigate} from "@/lib/ServerActions";
// import { fetchCourse} from "@/lib/data";

const Page = () => {

  //  console.log({order});
  //  const course = fetchCourse(order.courseId);
  const proces = useDebouncedCallback(()=>{
  navigate();
  },10000)

  useEffect(()=>{
    proces();
  })

  let coursePrice = "";

  // if(course._id.toString() === "6686e47970323db81a81c0e7"){
  //   coursePrice = "1,20,000";
  // }else{
  //   coursePrice = "60,000";
  // }

  return (
    <>
<div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 w-full max-w-xl text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your payment has been successfully processed.</p>
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="font-medium">course.title</h3>
                <p className="text-gray-500">Qty: 1</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="font-medium">{coursePrice}</p>
              </div>
            </div>
            <div className="border-t pt-2">
              <p className="text-gray-600">Transaction Date: order.createdAt</p>
              <p className="text-gray-600">Transaction ID: order.transactionId</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Page