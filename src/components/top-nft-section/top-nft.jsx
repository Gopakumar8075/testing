import { Container } from '@mui/system';
import React from 'react';
import TopNftCard from '../top-nft-card/top-nft-card';

const TopNft = () => {
  return (
    <>
      <div className="flex flex-col  gap-12">
        <div className="flex justify-center">
          <h1 className="text-white font-ralewaybold text-[1.5rem] font-bold 2xs:text-[20px]">
            Top Performers last 24 hours
          </h1>
        </div>
        <Container>
          <div className="2xs:h-60 2xs:pt-20 lg:pt-0 2xs:px-7 lg:px-0 overflow-auto grid 2xs:flex 2xs:flex-col md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-2  justify-center 2xs:gap-8 md:gap-9">
            <TopNftCard name="NFT Asset Name #96" image="/homepage/a.png" />

            <TopNftCard name="NFT Asset Name #4" image="/homepage/b.webp" />

            <TopNftCard name="NFT Asset Name #6" image="/homepage/c.webp" />

            <TopNftCard name="NFT Asset Name #18" image="/homepage/d.webp" />

            <TopNftCard name="NFT Asset Name #7" image="/homepage/e.webp" />

            <TopNftCard name="NFT Asset Name #22" image="/homepage/f.webp" />

            <TopNftCard name="NFT Asset Name #25" image="/homepage/g.webp" />

            <TopNftCard name="NFT Asset Name #9" image="/homepage/card.png" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopNft;
