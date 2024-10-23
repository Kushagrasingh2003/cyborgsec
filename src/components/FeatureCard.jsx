// components/FeatureCard.jsx

import Image from 'next/image';

const FeatureCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
      <div className="flex items-center gap-4 justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width="50"
          height="50"
        />
      </div>

      <div>
        <h2 className="flex text-center mt-3 font-semibold justify-center">{title}</h2>
        <p className="mt-4 text-gray-700 text-sm text-center font-light">
          {description}
        </p>
      </div>
    </blockquote>
  );
};

export default FeatureCard;
