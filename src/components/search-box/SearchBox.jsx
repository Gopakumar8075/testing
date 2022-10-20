import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
let timer;
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
const SearchBox = ({ setSearch, setPage, clear }) => {
  const [count, setCount] = useState('');
  const router = useRouter();
  const handleChange = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setSearch(e.target.value);
      setCount(e);
      setPage(1);
      router.query.search = e.target.value;
      router.push(router);
    }, 1000);
  };

  useEffect(() => {
    if (clear === false) {
      delete router.query['search'];
    }
  }, [clear]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        className="xl:w-[25rem] lg:w-[15rem] md:w-full"
        onSubmit={handleFormSubmit}
      >
        <label className="relative block">
          <input
            className="w-full md:h-[3.5rem] bg-black text-gray-100 font-poppinsmedium border border-slate-400 
            drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none opacity-80"
            placeholder="Enter Employee Name"
            type="text"
            onChange={(e) => handleChange(e)}
            // onChange={({ currentTarget: input }) => setSearch(input.value)}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 fill-black"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </span>
        </label>
      </form>
    </>
  );
};

export default SearchBox;
