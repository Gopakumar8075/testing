import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMarketPlaceApiData } from '../../store/services/marketplaceapi';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { BasicLayoutWrapper } from '../../utilitis/BasicLayoutWrapper';
import { Container, width } from '@mui/system';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getCollectiondata } from '../../apiCall/detailsapi/detailsapi';
const { NEXT_PUBLIC_BASE_URL } = process.env;

const NftCollections = () => {
  const router = useRouter();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getCollectiondata(setCollection);
  }, []);

  const handleNftCardClick = (id) => {
    router.push(`/marketplace?collectionItem=${id}`);
  };
  return (
    <div>
      <Container>
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-2  justify-center gap-4 mt-[50px] mb-[20px] ">
          {collection.map((item, index) => (
            <article
              onClick={() => {
                handleNftCardClick(item.id);
              }}
            >
              <div className="max-w-[270px] max-h-[604px]  border-1 border-[#4D5A74] bg-[#21252D] text-white p-2 rounded-[15px] cursor-pointer">
                <CardMedia
                  component="img"
                  height="100"
                  image={item.collectionImage}
                  alt="NFT image"
                  sx={{
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    paddingTop: '15px',
                    width: '250px',
                    height: '195px',
                  }}
                />
                <div className="flex flex-col  items-center font-poppinsmedium ">
                  <div className="xl:h-10 lg:h-11 text-center mt-[28px] text-[20px]">
                    <p>{item.collectionName}</p>
                  </div>
                  <div className="mt-[5px]  ">
                    <p className="text-[13px] text-[#0088FF] font-poppinsmedium">
                      By NFT Artist
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
};
export default BasicLayoutWrapper(NftCollections);
