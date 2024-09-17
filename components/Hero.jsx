import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = ({ onOpenModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const images = [
    '/images/hero-section-image-2.png',
    '/images/hero-section-image-3.png',
    '/images/hero-section-image.svg',
  ];

  // Change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative h-screen w-full text-white">
      {/* Dynamic background image */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-black bg-blend-darken ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex gap-12 items-center">
            <Image src="/images/Logo.svg" width={100} height={100} alt="Logo" />
            <h1 className="text-6xl font-bold text-white">Bazar</h1>
            <Image src="/images/RightImage.svg" width={100} height={100} alt="Right Image" />
          </div>
          <p className="text-gray-300 text-lg">
            Find Your Perfect Car or House with Bazar.
            Your Premier Destination For Buying, Renting, and Servicing Cars and Properties!
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => onOpenModal('intro')}
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded-xl"
            >
              INTRO
            </button>
            <button
              onClick={() => onOpenModal('about')}
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded-xl"
            >
              ABOUT
            </button>
            <button
              onClick={() => onOpenModal('contact')}
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded-xl"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
