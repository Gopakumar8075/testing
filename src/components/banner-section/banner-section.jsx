import Image from 'next/image';
import React from 'react';
import BannerStyles from './banner-section.module.scss';

const BannerSection = () => {
  return (
    <div>
      <div
        className={
          'h-full w-full py-4 rounded-3xl ' + BannerStyles.backgroundBanner
        }
      >
        <div className="flex justify-center py-2">
          <h1 className="text-[#D4D4D4] text-[18px] font-ralewaysemibold font-semibold">
            Our trusted Company
          </h1>
        </div>
        <div className="text-white flex justify-evenly lg:py-6 2xs:py-5 lg:flex-row 2xs:flex-col 2xs:flex-wrap 2xs:items-center 2xs:h-48 lg:h-36 2xs:gap-6">
          <div className="2xs:h-12 2xs:w-28 xs:h-14 xs:w-36 ">
            <Image src={'/homepage/Binance-logo.png'} width={120} height={50} />
          </div>
          <div className="2xs:h-12 2xs:w-28 xs:h-14 xs:w-36">
            <Image src={'/homepage/Digifinex.png'} width={200} height={50} />
          </div>
          <div className="2xs:h-12 2xs:w-28 xs:h-14 xs:w-36">
            <Image src={'/homepage/Chainlink.png'} width={180} height={50} />
          </div>
          <div className="2xs:h-12 2xs:w-28 xs:h-14 xs:w-36">
            <Image src={'/homepage/Opensea.png'} width={200} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
