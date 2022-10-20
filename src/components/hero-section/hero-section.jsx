import Image from 'next/image';
import React from 'react';
import Herosectionstyles from './hero-section.module.scss';

const HeroSection = () => {
  return (
    <section
      className={
        'flex items-center bg-homeheroimageNew bg-right bg-no-repeat h-full md:bg-contain md:justify-start 2xs:justify-center 2xs:bg-[length:600px_300px] sm:bg-[length:800px_400px] '
      }
    >
      <div className="md:pl-[6rem] 2xs:pl-0">
        <h1 className="md:text-[30px] 2xs:text-[24px] font-semibold font-ralewaybold text-white">
          MoonHive
        </h1>
        <div className="flex mt-[-10px] lg:justify-start 2xs:justify-center">
          <h1 className="md:text-[60px] 2xs:text-[24px] font-extrabold font-ralewaybold text-white">
            Employee TimeTracker
          </h1>
          <span className="relative md:top-[30px] 2xs:top-0 2xs:text-[24px] px-1 md:text-[35px] font-semibold font-ralewaybold text-white"></span>
        </div>
        <p className="text-[#D4D4D4] w-[35vw] text-[14px] font-ralewaylight 2xs:hidden lg:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </p>
      </div>
      {/* <div>
        <Image src="/homepage/bull.png" height={750} width={1400} />
      </div> */}
    </section>
  );
};

export default HeroSection;
