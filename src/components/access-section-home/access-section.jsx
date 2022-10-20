import React from 'react';
import Image from 'next/image';

const AcessSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={'/homepage/acces.png'} width={900} height={350} />
      </div>
      <div className="lg:mt-[-150px] 2xs:mt-[-100px]">
        <div className="flex justify-center text-[20px] relative top-4">
          <span className="bg-black rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <Image src={'/homepage/access.png'} width={35} height={40} />
          </span>
        </div>
        <div className="flex flex-col lg:gap-12 2xs:gap-6">
          <div className="flex justify-center text-[20px] cursor-pointer">
            <h2 className="text-[#D4D4D4] 2xs:text-[14px] xs:text-[20px] font-ralewaybold font-bold lg:w-[25%] bg-[#150E24] flex justify-center px-2 py-3 rounded-lg 2xs:w-[65%] xs:w-[60%]">
              Access Dashboard
            </h2>
          </div>

          <div className="flex justify-center text-[20px] 2xs:text-[18px]">
            <h2 className="text-[#D4D4D4] font-ralewaybold font-bold 2xs:text-center">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="text-[#818181] lg:w-[50%] lg:text-[17px] 2xs:text-[14px] text-center font-ralewayregular font-bold 2xs:w-full 2xs:px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum d
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcessSection;
