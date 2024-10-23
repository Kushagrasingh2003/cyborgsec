"use server"
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
// import Autoplay from "embla-carousel-autoplay"
 
export const CarouselSize =  async() =>{
  return (
    <Carousel
      opts={{
        align: "start",
        loop:true
        
      }}
    //   plugins={[
    //     Autoplay({
    //       delay: 5000,
    //     }),
    //   ]}
      className="w-full max-w-sm md:max-w-4xl "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">
                  <blockquote className="rounded-lg shadow-sm ">
        <div className="flex items-center gap-4 align-middle">
          <Image src="/director.webp" className="rounded-2xl" alt="user" width="40" height="40"/>
          

          <div>
            <p className="mt-0.5 text-sm font-medium text-gray-900">Paul Starr</p>
            <p className="mt-0 text-xs font-thin text-gray-800">profession</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 text-sm font-thin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}