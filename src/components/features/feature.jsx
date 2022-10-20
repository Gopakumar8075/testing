import React from 'react';
import Head from 'next/head';
import NftButton from '../nft-button/nft-button';
import handleSwitchNetwork from '../../lib/switchNetwork';
import { useRouter } from 'next/router';
import { buyNft } from '../../lib/buyNft';
import { claimBid } from '../../lib/claim';
import { removeFromSale } from '../../lib/removeSale';
import { auctionRevert } from '../../lib/cancelAuction';

import { useEffect, useState } from 'react';
const { NEXT_PUBLIC_BASE_URL } = process.env;

const Web3Button = (data) => {
  const router = useRouter();
  const id = router.query.id;
  const [walletAddress, setWalletAddress] = useState('');
  const [buyLoad, setBuyLoad] = useState(false);
  const [enableClaim, setEnableClaim] = useState(false);
  const [highestBidder, setHighestBidder] = useState('');

  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  useEffect(() => {
    const item = localStorage.getItem('walletAddress');
    setWalletAddress(item);
  }, []);

  const bidDetail = async () => {
    const bidDetail = await axiosInstance.get(
      `${NEXT_PUBLIC_BASE_URL}api/v1/bid/${data.data.data?.auction.id}`
    );
    if (bidDetail.data.length > 0) {
      setEnableClaim(true);
      setHighestBidder(bidDetail.data[0].bidderAddress);
    } else {
      setEnableClaim(false);
    }
  };

  let auctionEndTime;
  if (data.data.data?.auction) {
    auctionEndTime = data.data.data?.auction.endTime;
    bidDetail();
  }
  let nftOwnerAddress;
  if (data.data?.data?.marketplace) {
    nftOwnerAddress = data.data.data.marketplace.sellerAddress;
  } else {
    nftOwnerAddress = data.data.data?.ownerAddress;
  }

  // const { switchNetwork } = handleSwitchNetwork();

  //Buy Now
  const handleBuyNft = async () => {
    setBuyLoad(true);
    // await switchNetwork(data.data);
    await buyNft(data.data, router)
      .then((res) => {
        setBuyLoad(res);
      })
      .catch((err) => {
        setBuyLoad(false);
      });
  };

  //Bid
  const bidNft = async () => {
    router.push(`/bid?id=${id}`);
  };

  const makeOffer = (id) => {
    router.push(`/makeoffer/${id}`);
  };

  ///Sell
  const handleSell = (id) => {
    router.push(`/profile/sell?id=${id}`);
  };

  //Remove from sale
  const removeSale = async () => {
    setBuyLoad(true);
    // await switchNetwork(data.data);
    await removeFromSale(data.data, router)
      .then((res) => {
        setBuyLoad(res);
      })
      .catch((err) => {
        setBuyLoad(false);
      });
  };

  //Cancel Auction
  const cancelAuction = async () => {
    setBuyLoad(true);
    // await switchNetwork(data.data);
    await auctionRevert(data.data, router)
      .then((res) => {
        setBuyLoad(res);
      })
      .catch((err) => {
        setBuyLoad(false);
      });
  };

  //Cancel Auction
  const bidClaim = async () => {
    console.log('ppppppp');
    setBuyLoad(true);
    // await switchNetwork(data.data);
    await claimBid(data.data, router)
      .then((res) => {
        setBuyLoad(res);
      })
      .catch((err) => {
        setBuyLoad(false);
      });
  };

  return (
    <div className="flex gap-4">
      {data.data?.data?.isOnSale &&
        data.data?.data?.isOnAuction === false &&
        nftOwnerAddress?.toLowerCase() != walletAddress?.toLowerCase() && (
          <div className="w-[200px]">
            (
            <NftButton
              text={'Buy'}
              load={buyLoad}
              bgcolor={'violet'}
              onclick={() => {
                setBuyLoad(true);
                handleBuyNft();
              }}
            />
            )
          </div>
        )}

      {data.data?.data?.isOnSale === false &&
        data.data?.data?.isOnAuction &&
        data.data.data?.auction?.auctioneer.toLowerCase() !=
          walletAddress?.toLowerCase() &&
        currentTimestamp < auctionEndTime && (
          <div className="w-[200px]">
            (
            <NftButton
              text={'Bid'}
              bgcolor={'violet'}
              onclick={() => {
                bidNft();
              }}
            />
            )
          </div>
        )}

      {data.data?.data?.isOnAuction === false &&
        nftOwnerAddress?.toLowerCase() != walletAddress?.toLowerCase() && (
          <div className="w-[200px] mt-4">
            <NftButton
              onclick={() => makeOffer(data.data?.data.id)}
              text={'Make Offer'}
              bgcolor={'grey'}
            />
          </div>
        )}

      {walletAddress &&
        data.data?.data?.isOnSale === false &&
        nftOwnerAddress?.toLowerCase() === walletAddress?.toLowerCase() && (
          <div className="w-[200px]">
            (
            <NftButton
              text={'Sell'}
              bgcolor={'violet'}
              onclick={() => handleSell(data.data?.data.id)}
            />
            )
          </div>
        )}

      {walletAddress &&
        data.data?.data?.isOnAuction === false &&
        data.data?.data?.isOnSale === true &&
        nftOwnerAddress?.toLowerCase() === walletAddress?.toLowerCase() && (
          <div className="w-[200px]">
            (
            <NftButton
              text={'Remove from Sale'}
              bgcolor={'violet'}
              load={buyLoad}
              onclick={() => removeSale()}
            />
            )
          </div>
        )}
      {walletAddress &&
        data.data?.data?.isOnAuction === true &&
        data.data?.data?.isOnSale === false &&
        auctionEndTime != 0 &&
        enableClaim === false &&
        currentTimestamp >= auctionEndTime &&
        data.data?.data?.auction?.auctioneer.toLowerCase() ===
          walletAddress?.toLowerCase() && (
          <div className="w-[200px]">
            (
            <NftButton
              text={'Cancel Auction'}
              bgcolor={'violet'}
              load={buyLoad}
              onclick={() => cancelAuction()}
            />
            )
          </div>
        )}
      {walletAddress &&
        data.data?.data?.isOnAuction === true &&
        data.data?.data?.isOnSale === false &&
        auctionEndTime != 0 &&
        enableClaim === true &&
        currentTimestamp >= auctionEndTime &&
        highestBidder.toLowerCase() === walletAddress?.toLowerCase() && (
          <div className="w-[200px]">
            (
            <NftButton
              text={'Claim'}
              bgcolor={'violet'}
              load={buyLoad}
              onclick={() => bidClaim()}
            />
            )
          </div>
        )}
    </div>
  );
};

export default Web3Button;
