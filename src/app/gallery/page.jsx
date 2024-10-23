
"use client";
import { BlurFadeDemo } from "@/components/BlurFadeDemo";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/gallery/layout-grid";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWithWrapper";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  const imagePath = `/team${i + 1}.jpg`; // Adjust the path and file names as needed
  return imagePath;
});
export default function Page() {
  const title = "Our Team";
  const title2 = "Our Events";
  const title3 = "Our Campus";
  const title4 = "Media Coverage"  

  return (
    <>
      <MaxWidthWrapper>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-36 mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
          
          <BlurFadeDemo images={["t1.jpg", "t3.jpg", "t4.jpg", "t5.png", "t6.JPG", "t7.JPG", "t9.jpeg", "t10.jpeg", "t11.jpeg", "t12.jpeg"]} title={title} />
          <BlurFadeDemo images={["e2.jpg", "e3.jpg", "e4.jpg", "e5.jpg", "e6.JPG", "e7.JPG", "e8.JPG", "e9.JPG", "e10.JPG", "e12.jpg","e13.jpg",  "e14.jpeg", "e15.jpeg", "e16.jpeg", "e17.jpeg"]} title={title2} />
          <BlurFadeDemo images={["campus1.webp", "campus2.webp", "campus3.webp", "campus4.webp","campus5.webp","campus6.webp","campus7.webp", "campus8.webp", "campus9.webp", "campus10.webp", "campus11.webp","campus12.webp"]} title={title3} />
          {/* <BlurFadeDemo images={["media1.jpg", "media2.jpg", "media3.jpg", "media4.jpg"]} title={title4} /> */}
        </div>

        
       
      </MaxWidthWrapper>
    </>
  );
}

