import Image from 'next/image';
import React from 'react';
import NftButton from '../nft-button/nft-button';
import { useRouter } from 'next/router';
const DiscoverSection = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push('/marketplace');
  };

  return (
    <div className="flex lg:gap-9 2xs:gap-0 w-[100%] h-[100%] py-10 lg:flex-row 2xs:flex-col 2">
      <div className="w-[40%] flex items-center 2xs:justify-center text-white 2xs:w-full">
        <Image src={'/homepage/webb.png'} height={300} width={300} />
      </div>
      <div className="flex flex-col justify-center w-[60%] 2xs:w-full">
        <div className="flex flex-col lg:gap-12 2xs:gap-4 xs:gap-8 w-[60%] 2xs:w-full xs:items-center lg:items-start">
          <h1 className="font-ralewaybold 2xs:text-center lg:text-left">
            <span className="text-white lg:text-4xl font-bold 2xs:text-[22px]">
              Discover And
            </span>
            <span className="text-[#0080ff] lg:text-4xl font-bold 2xs:text-[22px]">
              {' '}
              Explore
            </span>
          </h1>
          <p className="text-[#818181] lg:text-[1rem] 2xs:text-[14px] lg:w-[60%] 2xs:w-full xs:w-[80%] 2xs:text-center lg:text-left 2xs:px-1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna."
          </p>
          <div className="lg:w-[35%] xs:w-[70%] lg:px-0 2xs:w-full 2xs:px-8">
            <NftButton
              text="Know More"
              bgcolor="violet"
              onclick={() => handleclick()}
              // icon="/homepage/accessbtn.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
