import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
const MarketplaceDescription = ({ description, properties }) => {
  const [open2, setOpen2] = useState(false);
  return (
    <div
      className="xs:w-[25rem] border-[#313949] text-white flex flex-col gap-4 border rounded-b-lg height-[400px]
   bg-[#15171E] border-transparent"
    >
      <div className="  p-6 border-[#313949]  height-[100px]   ">
        <h6 className="text-[#FEFEFE] md:text-[16px] font-ralewaysemibold">
          Designation
        </h6>
        <p className="text-[#818181]  font-[ ralewayregular]">{description}</p>
      </div>

      {/* <div
        className=" text-[#FEFEFE] font-ralewaysemibold  p-6 flex justify-between"
        onClick={() => {
          setOpen2(!open2);
        }}
      >
        <h3 className=" md:text-[16px] ">Properties</h3>
        <ArrowDropDownIcon sx={{ color: '#707070' }} />
      </div>

      {open2 ? (
        <div className="flex flex-wrap gap-3 justify-center pb-4 ">
          {properties?.length > 0
            ? properties.map((prop, index) => (
                <div className=" w-28 rounded-lg py-2 bg-[#313339]  ">
                  <p className="text-center text-[#C7C7C7] font-ralewayregular">
                    {prop.traitType}
                  </p>
                  <p className="text-center font-ralewaysemibold text-[#FEFEFE]">
                    {prop.value}
                  </p>
                </div>
              ))
            : null}
        </div>
      ) : null} */}
    </div>
  );
};

export default MarketplaceDescription;
