import Image from 'next/image';
import BlurFade from "@/components/magicui/blur-fade";

type BlurFadeDemoProps = {
  images: string[]; // Array of image file names, e.g., ["team1.jpg", "team2.jpg"]
  title: string; // Single title string
};

export function BlurFadeDemo({ images, title }: BlurFadeDemoProps) {
  return (
    <>
      <section id="photos">
        <BlurFade delay={0.25} inView>
          <h2 className="my-5 sm:my-6 md:my-7 lg:my-8 xl:my-10 2xl:my-12 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center leading-tight">
            {title}
          </h2>
        </BlurFade>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageName, idx) => {
            const delay = 0.25 + idx * 0.05;
            const imageUrl = `/${imageName}`; // Construct the URL for the local image

            return (
              <BlurFade key={imageUrl} delay={delay} inView>
                <div className="mb-4 size-full rounded-lg object-contain">
                  <Image
                    src={imageUrl}
                    alt={`Image ${idx + 1}`}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className="rounded-lg"
                    
                  />
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>
    </>
  );
}
