import Image from 'next/image';
import React from 'react';
import NftcardStyles from './top-nft-card.module.scss';

const TopNftCard = ({ name, image }) => {
  return (
    <div
      className={
        'text-white bg-[#1F2236] h-20  rounded-md flex p-2' +
        NftcardStyles.nftcardborder
      }
    >
      <div className="w-[25%] flex flex-col justify-center">
        <div className={'flex justify-center ' + NftcardStyles.imagediv}>
          <Image src={image} height={50} width={50} />
        </div>
      </div>
      <div className="flex flex-col justify-center w-[60%]">
        <div>
          <h1 className="font-poppinsmedium text-[0.9rem]">user</h1>
          <div className="flex">
            <h1 className="text-[#647AA7] font-poppinsmedium text-[0.9rem]">
              96885
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-extrabold">...</h1>
      </div>
    </div>
  );
};

export default TopNftCard;
