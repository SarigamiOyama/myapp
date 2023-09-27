import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";



const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);
  const [sliderData, setSliderData] = useState([
    {
      title: "White Polars",
      id: 1,
      name: "Sarigami Oyama",
      collection: "Hello Polars",
      price: "664 ETH",
      like: 2435,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Fox throught",
      id: 2,
      name: "Mirakayo kazuto",
      collection: "Fox Foundation",
      price: "214 ETH",
      like: 12113,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Fox Pride",
      id: 3,
      name: "Mizaki kurama",
      collection: "Fox Foundation",
      price: "2364 ETH",
      like: 543,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
  ]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSliderData((prevSliderData) =>
        prevSliderData.map((item) => ({
          ...item,
          time: decrementTime(item.time),
        }))
      );
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const decrementTime = (time) => {
    if (time.seconds > 0) {
      return { ...time, seconds: time.seconds - 1 };
    } else if (time.minutes > 0) {
      return { ...time, minutes: time.minutes - 1, seconds: 59 };
    } else if (time.hours > 0) {
      return { ...time, hours: time.hours - 1, minutes: 59, seconds: 59 };
    } else if (time.days > 0) {
      return { ...time, days: time.days - 1, hours: 23, minutes: 59, seconds: 59 };
    }
    return time;
  };

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);


  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
