import {
  Card,
  CardMedia,
  Grid,
  Box,
  Button,
  Modal,
  Paper,
} from '@mui/material';
import React, { useState } from 'react';

const MarketCard = ({ url, imageurl, description, properties }) => {
  const [open1, setOpen1] = useState(false);
  return (
    <div className="">
      <Box sx={{ maxWidth: 500 }}>
        <div className="flex justify-center xs:w-[25rem] ">
          <div onClick={() => setOpen1(true)}>
            {url ? (
              <CardMedia
                sx={{
                  bordertopradius: '15px',
                }}
                component="video"
                src={url}
                alt="NFT"
                height={300}
              />
            ) : imageurl ? (
              <CardMedia
                sx={{
                  borderRadius: 1,
                }}
                component="img"
                src={imageurl}
                alt="NFT"
                height={300}
              />
            ) : (
              <div className="h-[400px]"></div>
            )}
          </div>
        </div>

        <Modal open={open1} onClose={() => setOpen1(false)}>
          <Box
            sx={{
              width: { md: '30%', xs: '60%' },
              height: { md: '30%', xs: '60%' },
            }}
          >
            <CardMedia
              sx={{
                marginLeft: { lg: '115%', xs: '33%', md: '119%' },
                marginTop: { lg: '30%', xs: '127%', md: '73%', sm: '73%' },
              }}
              component="img"
              image={imageurl}
              alt="NFT"
            />
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default MarketCard;
