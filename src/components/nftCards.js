import React, { useEffect, useState } from 'react'
import NftCardComponent from './nftCards-component';
import aerialist from "../images/aerialistPhoto.jpeg";
import headshot from "../images/HeadshotPhoto.jpeg";
import adventure from "../images/adventurePhoto.jpeg";
import print from "../images/printPhoto.jpeg";

function NftCards() {

  // const [cardData, setCardData] = useState(null);

  // useEffect(() => {
  //   getGitHubUserWithFetch();
  // }, []);

  // const getGitHubUserWithFetch = async () => {
  //   const response = await fetch(gitHubUrl);
  //   const jsonData = await response.json();
  //   setCardData(jsonData);
  // };

  return (
    <div className="Nft__card">
      <div className="Nft__card-description">
        A Woman of Many Skills
      </div>
      <div className="Nft__card-component">
        <NftCardComponent title="Aerial Modeling"
          src={aerialist}
          subTitle={"Dancing through the air"}
          buttonLabel={"Performance Booking"}
          // description="Won 4 top ranking metals in"
          Href="mailto:thesustainablegrower@gmail.com" />
        <NftCardComponent title="Adventure Modeling"
          src={adventure}
          subTitle={"Pushing photography boundaries"}
          buttonLabel={"Book Event"}
          // description="Competed 10 times, and have placed first in nationals. "
          Href="mailto:thesustainablegrower@gmail.com" />
        <NftCardComponent title="Print Modeling"
          src={print}
          subTitle={"A Printed Odyssey"}
          buttonLabel={"View Photos"}
          // description="Competed 1 time"
          Href="mailto:thesustainablegrower@gmail.com" />
        <NftCardComponent title="Headshots"
          src={headshot}
          subTitle={"In the Eyes of the Lens"}
          buttonLabel={"Contact for access"}
          // description="Over 500 photo's available."
          Href="mailto:thesustainablegrower@gmail.com" />
      </div>
      <a href="https://www.instagram.com/zen_aerial" target="_blank" rel="noreferrer" className="btn2 btn2--green">Explore Photos</a>
    </div>
  );
}

export default NftCards;
