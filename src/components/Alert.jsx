"use client";
import React from "react";

import { useState, useEffect } from "react";
import CustomAlert from "../components/CustomAlert";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);
  const showAlert = true;

  useEffect(() => {
    if (showAlert) {
      setModalVisible(true);
    }
  }, [showAlert]);

  const handleClose = () => {
    setModalVisible(false);
  };

  

  return (
    <div>
      {/* Other content */}
      <CustomAlert show={isModalVisible} onClose={handleClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
  <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col md:flex-row">
    
    {/* Close Button */}
    <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={handleClose}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <img src="/add.webp" alt="Laptop Image" className="w-full h-48 md:w-1/2 md:h-auto object-cover rounded-t-lg md:rounded-t-lg md:rounded-l-lg" />
    
    <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
      <h2 className="text-lg font-bold mb-2">Become a Cybersecurity Pro</h2>
      <p className="text-4xl font-extrabold mb-2">Don&apos;t Miss Out!</p>
      <p className="text-gray-700 mb-4">10% OFF Cybersecurity Courses (Expires Soon!)</p>
      <Link href="course/6686e47970323db81a81c0e7">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Explore Now</button>
      </Link>
    </div>
  </div>
</div>

      </CustomAlert>
    </div>
  );
}
