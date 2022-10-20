import Image from 'next/image';
import React from 'react';
import ButtonLoading from '../button-loading/button-loading';

const NftButton = ({ text, bgcolor, icon, onclick, link, load, id }) => {
  switch (bgcolor) {
    case 'violet':
      return (
        <>
          <button
            className={`text-white font-ralewaybold bg-[#9100FF] w-full rounded-lg py-2 font-bold`}
            onClick={onclick ? onclick : null}
          >
            {icon ? (
              <>
                <span className="pr-6">
                  <Image src={icon} width={30} height={30} />
                </span>
                <span>{text}</span>
                {load ? <ButtonLoading /> : ''}
              </>
            ) : (
              <>
                <span className="flex justify-center gap-4 pt-2">
                  <span className="">{text}</span>

                  {load ? <ButtonLoading /> : ''}
                </span>
              </>
            )}
          </button>
        </>
      );
    case 'grey':
      return (
        <>
          {link ? (
            <a href={link}>
              <button
                className={`text-white font-ralewaybold bg-[#291B33]  w-full rounded-lg py-4 font-bold`}
                onClick={onclick ? onclick : null}
              >
                {icon ? (
                  <span className="pr-6">
                    <Image src={icon} width={25} height={25} />
                  </span>
                ) : null}
                <span>{text}</span>
                {load ? <ButtonLoading /> : ''}
              </button>
            </a>
          ) : (
            <button
              className={`text-white font-ralewaybold bg-[#291B33]  w-full rounded-lg py-4 font-bold`}
              onClick={onclick ? onclick : null}
            >
              {icon ? (
                <span className="pr-6">
                  <Image src={icon} width={25} height={25} />
                </span>
              ) : null}
              <>
                <span className="flex justify-center gap-4 pt-2">
                  <span className="">{text}</span>
                  {load ? <ButtonLoading /> : ''}
                </span>
              </>
            </button>
          )}
        </>
      );
    case 'lightgrey':
      return (
        <>
          <button
            disabled={load}
            className={`text-black font-ralewaybold bg-[#99979b] text-center w-[90px] rounded-lg pl-2 py-0 font-bold flex`}
            onClick={onclick ? onclick : null}
          >
            {icon ? (
              <span className="pr-6">
                <Image src={icon} width={20} height={20} />
              </span>
            ) : null}
            <span>{text}</span>
            {load ? <ButtonLoading /> : ''}
          </button>
        </>
      );
  }
};

export default NftButton;
