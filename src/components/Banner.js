import React from 'react';
import DataBar from '../components/DataBar'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className='banner-text-wrapper'>
          <div className='banner-text-h1'>
            OPcode NFT
            <div className='banner-text-h2'>
              Smart contracts & Consultation
            </div>
            <p className='banner-text-h3'>
              A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits
            </p>
            <div className='banner-button'>
              <div className='banner-button-text'>Explore NFTs</div>
            </div>
          </div>
        </div>
        <div className='banner-img-wrapper'>
          <div className='banner1'></div>
          <div className='banner2'></div>
          <div className='banner3'></div>
          <div className='banner4'></div>
          <div className='banner5'></div>
        </div>
      </div>
      <div>
        <DataBar />
      </div>
    </>
  );
};

export default Banner;
