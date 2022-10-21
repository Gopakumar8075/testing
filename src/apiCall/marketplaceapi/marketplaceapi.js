import axios from 'axios';

const { NEXT_PUBLIC_BASE_URL } = process.env;

const getData = async (
  query,
  page,
  setNftCollection,
  nftCollection,
  clear,
  setClear,
  router
) => {
  if (clear) {
    let search = query.search ? query.search : '';
    let collectionItem = query.collectionItem ? query.collectionItem : '';
    let chainID = query.network ? query.network : '';
    let sortBy = query.sortBy ? query.sortBy : '';
    let asc = query.asc ? `:${query.asc}` : query.desc ? `:${query.desc}` : '';
    let types = query.isOnAuction
      ? `isOnAuction=true`
      : query.isOnSale
      ? `isOnSale=true`
      : '';
    let url = `?search=${search}&collectionItem=${collectionItem}&network=${chainID}&page=${page}&sortBy=${sortBy}${asc}&${types}`;
    const response = await axios.get(`https://test96332.herokuapp.com/mockapicall.json`);
    console.log(response, 'marketplace api');
    page === 1
      ? setNftCollection(response)
      : setNftCollection([...nftCollection, ...response]);
  } else {
    const response = await axios.get('./mockapicall.json');
    page === 1
      ? setNftCollection(response)
      : setNftCollection([...nftCollection, ...response]);
    router.replace('/marketplace', undefined, { shallow: true });
    setClear(true);
  }
};

export { getData };
