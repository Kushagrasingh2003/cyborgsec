'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TrustedOrganizations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5); // Default for larger screens
  const carouselContentRef = useRef(null);
  const imageNames = [
    "l1.png",
    "l2.png",
    "l3.png",
    "l4.png",
    "l5.png",
    "l6.png",
    "l7.png",
    "l8.png",
    "l9.png",
    "l10.png",
    "l11.png",
    "l12.png",
    "l13.png",
    "l14.png",
    "l15.png",
    "l16.png",
    "l17.png",
    "l18.png",
    "l19.png",
    "l20.png",
  ];
  const totalItems = imageNames.length;

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
    <div className="md:my-10 overflow-hidden relative">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-black sm:text-4xl">
        In {" "}
        <span className="text-red-700 font-bold text-3xl md:text-4xl">
        Association{" "}
        </span>
        With
      </h2>
      <div className="relative mt-8 px-6">
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-28 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-gray-300"
          disabled={currentIndex === 0}
          style={{ marginLeft: '-20px' }} // Adjust margin to bring button closer
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <Carousel className="relative w-5/6 overflow-hidden mx-auto">
          <CarouselContent ref={carouselContentRef} className="flex transition-transform duration-300">
            {imageNames.map((imageName, index) => (
              <CarouselItem key={index} className={`flex-shrink-0 ${itemsPerView === 1 ? 'basis-full' : 'basis-1/5'} h-24 md:h-32 lg:h-40 relative`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={`/${imageName}`}
                    alt={`partner${index + 1}`}
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
          className="absolute top-1/2 right-28 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-gray-300"
          disabled={currentIndex >= totalItems - itemsPerView}
          style={{ marginRight: '-20px' }} // Adjust margin to bring button closer
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrustedOrganizations;
