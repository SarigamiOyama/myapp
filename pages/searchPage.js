import React, { useEffect, useState, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Loader } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import collection from "./collection";

const searchPage = () => {
  const { fetchNFTs, setError, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      // if (currentAccount) {
      fetchNFTs().then((items) => {
        if (Array.isArray(items)) {
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
        } else {
          // Handle the case where 'items' is not an array
          console.error("'items' is not an array:", items);
        }
      }).catch((error) => {
        setError("Error fetching NFTs", error);
      });
      // }
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, []);

  
  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };
  

  const collectionArray = [
    require('../img/NFT1.jpg'),
    require('../img/NFT2.jpg'),
    require('../img/NFT3.jpg'),
    require('../img/NFT4.jpg'),
    require('../img/NFT5.jpg'),
    require('../img/NFT6.jpg'),
    require('../img/NFT7.jpg'),
    require('../img/NFT8.jpg'),
    require('../img/NFT9.jpg'),
    require('../img/NFT10.jpg'),
    require('../img/NFT11.jpg'),
    require('../img/NFT13.jpg'),
    require('../img/NFT14.jpg'),
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {nfts.length == 2 ? <Loader /> : <NFTCardTwo NFTData={collectionArray} />}
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
