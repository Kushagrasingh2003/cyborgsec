'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const images = [
  "/ap1.webp",
  "/ap2.webp",
  "/ap3.webp",
  "/ap4.webp",
  
];

const WorkedWithCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5); // Default for larger screens
  const carouselContentRef = useRef(null);
  const totalItems = images.length;

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1); // Show 1 image at a time on mobile
      } else {
        setItemsPerView(5); // Show 5 images at a time on larger screens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const updateCarousel = (index) => {
    if (carouselContentRef.current) {
      const offset = -index * 100 / itemsPerView;
      carouselContentRef.current.style.transform = `translateX(${offset}%)`;
    }
  };

  const handleNext = () => {
    if (currentIndex < totalItems - itemsPerView) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      updateCarousel(newIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      updateCarousel(newIndex);
    }
  };

  return (
    <div className="md:my-3 w-full overflow-hidden relative align-middle justify-center mx-auto">
      {/* <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
        Our Images{" "}
        <span className="text-red-700 font-bold text-3xl md:text-4xl">
          Carousel
        </span>
      </h2> */}
      <div className="relative ">
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 md:left-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-gray-300"
          disabled={currentIndex === 0}
          style={{ marginLeft: '-10px' }} // Adjust margin to bring button closer
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <Carousel className="relative  w-5/6 overflow-hidden mx-auto">
          <CarouselContent ref={carouselContentRef} className="flex transition-transform duration-300">
            {images.map((src, index) => (
              <CarouselItem key={index} className={`flex-shrink-0 ${itemsPerView === 1 ? 'basis-full' : 'basis-1/5'} md:ml-14 h-24 md:h-32 lg:h-40 relative`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-gray-300"
          disabled={currentIndex >= totalItems - itemsPerView}
          style={{ marginRight: '-10px' }} // Adjust margin to bring button closer
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WorkedWithCarousel;