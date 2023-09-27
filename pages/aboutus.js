import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Denzel Joy Serrano",
      position: "QA And Leader",
      images: images.founder1,
    },
    {
      name: "Kirby Sembrano",
      position: "Co-Developer",
      images: images.founder2,
    },
    {
      name: "Anthony Agapay",
      position: "Head Developer",
      images: images.founder3,
    },
    {
      name: "EM Lozada",
      position: "Resources Manager",
      images: images.founder4,
    },
    {
      name: "Sarigami Oyama",
      position: "Co-Developer",
      images: images.founder5,
    },
    {
      name: "Kristella Mae Lasim",
      position: "Co-Resource Manager",
      images: images.founder6,
    },
  ];

 
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              The HTF Group of researcher students proudly presents their very own NFT Marketplace that focuses
              on Arts, Videos, Music and Masterpiece that can be traded or sold digitally. 
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            The Proud Students of Group 1 from Cybersecurity 42 in Universidad De Manila.
            Creating Miracles with a button
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
       
        
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
