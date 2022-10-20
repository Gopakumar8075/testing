import { useRouter } from 'next/router';
import React from 'react';
import ButtonStyles from './nft-button.module.scss';

const NftNavbutton = ({ value, url }) => {
  const router = useRouter();

  /**
   *  To update the url params
   */
  const handleOnClick = () => {
    router.push(url);
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        className={
          (router.route === url ? ButtonStyles.buttonUnderLine : '') +
          ' text-[18px] text-white pb-[2px] font-ralewayregular '
        }
      >
        {value}
      </button>
    </>
  );
};

export default NftNavbutton;
