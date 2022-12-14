import NftCard from '../../src/components/nft-card/NftCard';

import { useEffect, useState } from 'react';

import { BasicLayoutWrapper } from '../../src/utilitis/BasicLayoutWrapper';
import { useRouter } from 'next/router';
import SearchBox from '../../src/components/search-box/SearchBox';
import Head from 'next/head';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import marketplaceapi from './marketplaceapi/marketplaceapi';
import { getData } from '../../src/apiCall/marketplaceapi/marketplaceapi';
const { NEXT_PUBLIC_BASE_URL } = process.env;

const Marketplace = () => {
  const router = useRouter();
  const query = router.query;
  const [page, setPage] = useState(1); //for pagenation
  const [loading, setLoading] = useState(false); //forloading animation
  const [searching, setSearch] = useState(''); //url search params state
  const [collectionId, setCollectionId] = useState('');
  const [chainId, setChainId] = useState('');
  const [nftType, setNftType] = useState();
  const [sort, setSort] = useState({ sort: 'rating', order: 'asc' });
  const [nftCollection, setNftCollection] = useState([]);
  const [clear, setClear] = useState(true);
  const [nftFilter, setNftFilter] = useState();

  const handleNftCardClick = (id) => {
    router.push(`/marketplace/${id}`);
  };

  useEffect(() => {
    if (router.isReady) {
      getData(
        query,
        page,
        setNftCollection,
        nftCollection,
        clear,
        setClear,
        router
      );
    }
  }, [
    router.isReady,
    searching,
    sort,
    page,
    collectionId,
    clear,
    chainId,
    nftType,
  ]);

  const handleMoreImage = () => {
    setPage((prev) => prev + 1);
  };

  const handleClear = () => {
    setClear(false);
    setPage(1);
  };

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Head>
        <title>Employee Time Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-2">
        <section
          className="flex bg-marketplacebackground 
          bg-no-repeat "
        >
          <div className="hidden">
            {['left'].map((anchor) => (
              <div
                key={anchor}
                className="fixed bottom-4 left-[48%] z-[1] lg:hidden"
              >
                <button
                  className="text-white bg-blue-500 rounded-full p-2 "
                  onClick={toggleDrawer(anchor, true)}
                >
                  <FilterAltIcon />
                </button>
              </div>
            ))}
          </div>

          <section className=" flex flex-col gap-4 px-10 w-[100%]">
            <section className=" flex gap-4 2xs:flex-col lg:flex-row ">
              <div>
                <SearchBox
                  setPage={(page) => setPage(page)}
                  setSearch={(searching) => setSearch(searching)}
                  clear={clear}
                />
              </div>
            </section>
            {nftCollection.data?.length > 0 ? (
              <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-2  justify-center gap-4 ">
                {nftCollection?.data
                  .filter((asd) => asd.name.toLowerCase().includes(searching))
                  .map((item, index) => (
                    <article
                      className=" cursor-pointer"
                      key={index}
                      onClick={() => {
                        handleNftCardClick(item._id);
                      }}
                    >
                      <NftCard mapitem={item} />
                    </article>
                  ))}
              </section>
            ) : (
              <div className=" h-[calc(100vh-28rem)] text-gray-500  w-full flex items-center justify-center">
                No data found
              </div>
            )}

            {nftCollection?.length > 10 ? (
              <div className="flex justify-center pb-4">
                <button
                  className="mt-4 text-white bg-blue-500 py-2 px-4 rounded-full "
                  onClick={handleMoreImage}
                >
                  View More
                </button>
              </div>
            ) : null}
          </section>
        </section>
      </main>
    </>
  );
};

export default BasicLayoutWrapper(Marketplace);
