import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { src: "/nasscom.jpg", alt: "partner1", width: 200, height: 180 },
  { src: "/nsdu.jpg", alt: "partner2", width: 200, height: 180 },
  { src: "/iso.png", alt: "partner3", width: 150, height: 180 },
  { src: "/msme.png", alt: "partner4", width: 150, height: 180 },
];

const TrainingPartners = () => {
  return (
    <div className="md:my-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
        Affiliated{"  "}
        <span className="text-red-700 font-bold text-3xl md:text-4xl">
          With
        </span>
      </h2>

      {/* Mobile View Carousel */}
      <div className="md:hidden mt-10">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2 h-52 w-full">
                      <Image
                        src={partner.src}
                        width={partner.width}
                        height={partner.height}
                        alt={partner.alt}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sr-only" />
          <CarouselNext className="sr-only" />
        </Carousel>
      </div>

      {/* Desktop View */}
      <div className="hidden md:mt-10 md:flex md:gap-32 gap-4 align-middle items-center md:mx-56 mx-auto justify-center">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            width={partner.width}
            height={partner.height}
            alt={partner.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default TrainingPartners;
