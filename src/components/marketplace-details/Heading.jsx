import { Typography } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
const { NEXT_PUBLIC_BASE_URL } = process.env;

const Heading = ({ name, details, emp }) => {
  const router = useRouter();
  const id = router.query.id;

  const [isActive, setActive] = useState(false);
  const [isFavourite, setIsFavourite] = useState(null);
  const [showlovebutton, setshowlovebutton] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('walletAddress')
    ) {
      setshowlovebutton(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('connected', () => checkStatus(router.query.id));
    return document.removeEventListener('connected', () =>
      checkStatus(router.query.id)
    );
  }, [router.isReady]);

  useEffect(() => {
    document.addEventListener('disconnected', () => setshowlovebutton(false));
    return document.removeEventListener('disconnected', () => {
      setshowlovebutton(false);
      setIsFavourite(null);
      setActive(false);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkStatus(id);
    }
    document.addEventListener('loggedOut', () => setshowlovebutton(false));
    return document.removeEventListener('loggedOut', () => {
      setshowlovebutton(false);
    });
  }, [router.isReady]);

  const toggleClass = async (e, id) => {
    setIsFavourite(!isFavourite);

    setActive(!isActive);
    e.stopPropagation();
    await checkLogin(id, isFavourite);
  };

  const checkStatus = async (id) => {
    setshowlovebutton(true);
    if (id != undefined) {
      let response = await axiosInstance.get(
        `${NEXT_PUBLIC_BASE_URL}api/v1/favourite/${id}/status`
      );
      setActive(response.data.isFavourite);
      setIsFavourite(response.data.isFavourite);
    }
  };

  const checkLogin = async (id, isFavourite) => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('walletAddress')
    ) {
      await axiosInstance
        .post(`${NEXT_PUBLIC_BASE_URL}api/v1/favourite/add-or-remove`, {
          isFavourite: !isFavourite,
          nft: id,
        })
        .then((res) => {});
    } else {
    }
  };

  return (
    <>
      <div className="flex flex-col  gap-4 ">
        <div className="flex gap-4 2xs:justify-center md:justify-start ">
          <div className="text-white font-ralewaysemibold ">
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </div>
          <div className="align-middle text-white ">
            {showlovebutton ? (
              <button
                // className={isActive ? 'text-red-600' : null}
                onClick={(e) => toggleClass(e, id)}
              >
                {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </button>
            ) : null}
          </div>
        </div>

        <div className="flex gap-10 2xs:justify-center md:justify-start">
          <div className="text-white">
            <p className="text-[#647AA7] font-popinsregular uppercase flex 2xs:justify-center md:justify-start">
              Employee Id
            </p>
            <p className="font-ralewaysemibold text-white uppercase flex 2xs:justify-center md:justify-start">
              {emp}
            </p>
          </div>
        </div>
        <div className="flex 2xs:justify-center md:justify-start text-center  text-[#818181] font-ralewayregular">
          <p>{details}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
