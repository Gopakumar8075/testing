import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useState } from 'react';

import NftFooter from '../nft-footer/nft-footer';
import NftNavbutton from '../nft-nav-button/nft-nav-button';
import BasicLayoutStyles from './basic-layout.module.scss';
import RoutingData from './routes';
import { useEffect } from 'react';

import {
  disConnectRouteChange,
  getAccountChainChange,
} from './accountChainChange';
import Image from 'next/image';

const BasicLayout = ({ children }) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState(router.route); //route state initializing
  const [showMobileHamburger, setShowMobileHamburger] = useState(false);
  const mobileMenuRef = useRef();
  const [connect, setConnect] = useState(false);
  const [walletAdd, setWalletAdd] = useState('');
  const [chainId, setChainId] = useState();
  const [provider, setProvider] = useState();

  const [loader, setLoader] = useState(false);
  const INFURA_RPC_URL = `https://goerli.infura.io/v3/209e68ee2afa408197de5d44e2feefa7`;
  const DEFAULT_CHAIN_ID = 1;

  /**
   * Function to update the url query params
   * @param {string} url
   */
  const setRoute = (url) => {
    setCurrentRoute(url);
  };

  const getProviderDetails = () => {
    setShowMobileHamburger(false);
    setConnect(true);
    let providerFromLocalStorage = getProviders(
      INFURA_RPC_URL,
      DEFAULT_CHAIN_ID
    );
    setProvider(providerFromLocalStorage);
  };

  const hanndleHamburgerMobile = () => {
    if (!showMobileHamburger) {
      setShowMobileHamburger(true);
    } else {
      setShowMobileHamburger(false);
    }
  };

  /**
   *  Function for handle hamburger menu outside click
   */

  const handleHamburgerMobileOutsideClick = () => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
    function handleClick(e) {
      if (mobileMenuRef && mobileMenuRef.current) {
        const ref = mobileMenuRef.current;
        if (!ref.contains(e.target)) {
          setShowMobileHamburger(false);
        }
      }
    }
  };

  useEffect(() => {
    getAccountChainChange(provider, setConnect, setWalletAdd, setChainId);
  }, [provider, walletAdd]);

  // useEffect(() => {
  //   handleHamburgerMobileOutsideClick();
  //   const data = getProviders();
  //   if (localStorage.getItem('provider')) {
  //     let newvalue = getProviders();
  //     console.log(
  //       window.ethereum?.networkVersion,
  //       '2222222222222222222222222222'
  //     );
  //     newvalue
  //       .request({ method: 'eth_accounts' })
  //       .then((accounts) => {
  //         if (accounts.length === 0) {
  //           localStorage.clear();
  //           const event = new Event('disconnected');
  //           document.dispatchEvent(event);
  //         }
  //       })
  //       .catch(console.error);
  //     if (newvalue._addresses?.length < 1) {
  //       localStorage.clear();
  //       const event = new Event('disconnected');
  //       document.dispatchEvent(event);
  //     }
  //   }
  //   setProvider(data);
  //   const getWalletAddressFromLocalStorage = () => {
  //     const walletAddress = localStorage.getItem('walletAddress');
  //     setWalletAdd(walletAddress);
  //   };
  //   getWalletAddressFromLocalStorage();
  //   disConnectRouteChange(router);
  //   document.addEventListener('connected', () => getProviderDetails());
  //   return document.removeEventListener('connected', () =>
  //     getProviderDetails()
  //   );
  // }, []);

  return (
    <section className="w-full">
      <nav className={BasicLayoutStyles.headerMain}>
        <div className={BasicLayoutStyles.title}>
          <div>
            <Link href={'/'}>
              <span onClick={() => setRoute('/')}>
                <span className="2xs:text-[20px] sm:text-[24px] font-extrabold text-white font-ethnocentric">
                  Moon
                </span>
                <span className="2xs:text-[20px] sm:text-[24px] font-extrabold font-ethnocentric text-headerorange">
                  Hive
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className={'flex w-[80%] justify-end 2xs:hidden lg:flex'}>
          <div className="flex px-1 gap-12">
            {RoutingData.map((route, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    route.route === router.asPath
                      ? setLoader(false)
                      : setLoader(false)
                  }
                >
                  <NftNavbutton value={route.value} url={route.route} />
                </div>
              );
            })}
          </div>
        </div>
        <div ref={mobileMenuRef}>
          <div className="px-2 lg:hidden flex" onClick={hanndleHamburgerMobile}>
            <Image
              loading="eager"
              src="/icons/hamburger.svg"
              alt="HamburgerIcon"
              layout="intrinsic"
              width={25}
              height={25}
            />
          </div>
          {showMobileHamburger && (
            <div
              className={
                ' h-[120px] 2xs:w-64 flex flex-col absolute top-20 bg-[#010336] right-4 bg-opacity-95 rounded-md py-1'
              }
            >
              <ul className="w-[100%] text-white font-ralewayregular text-[14px]">
                {RoutingData.map((route, index) => (
                  <li
                    key={index}
                    className="text-center py-3"
                    onClick={() => setShowMobileHamburger(false)}
                  >
                    <Link href={route.route}>{route.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      {/* <Loader show={loader} /> */}
      {children}
      <NftFooter />
    </section>
  );
};

export default BasicLayout;
