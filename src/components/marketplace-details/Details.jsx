import { Grid, Typography } from '@mui/material';
import React from 'react';

const Details = ({ contractaddress, tokenid, blockchain, creatorFee }) => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex 2xs:justify-center md:justify-start">
          <Typography
            variant="h6"
            sx={{
              paddingTop: '10px',
              color: 'white',
              fontFamily: ' ralewaysemibold',
              fontSize: '25px',
            }}
          >
            Details
          </Typography>
        </div>
        <div className="flex flex-col gap-2 2xs:mx-auto md:mx-0">
          <div className="flex  gap-2">
            <p className="w-48 text-[#818181] font-ralewayregular">
              Daily Working Hours
            </p>
            <p className="truncate w-24  text-[#818181] font-ralewayregular">
              {contractaddress}
            </p>
          </div>

          <div className="flex  gap-2">
            <p className="w-48 text-[#818181] font-ralewayregular">
              {' '}
              Weekly Working Hours
            </p>
            <p className=" text-[#818181] font-ralewayregular">{tokenid}</p>
          </div>

          <div className="flex  gap-2">
            <p className="w-48 text-[#818181] font-ralewayregular">
              Monthly Working Hours
            </p>
            <p className=" text-[#818181] font-ralewayregular">{blockchain}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
