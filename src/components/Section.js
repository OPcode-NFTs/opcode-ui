import React from 'react';
import '../App.css';
import img1 from '../assets/Benefitcardcard1.png'
import img2 from '../assets/cardleft2.svg'
import img3 from '../assets/cardleft3.svg'
import img4 from '../assets/cardleft4.svg'
import img5 from '../assets/cardleft5.svg'
import img6 from '../assets/cardrigh1.svg'
import img7 from '../assets/cardrigh2.svg'
import img8 from '../assets/cardright3.svg'
import img9 from '../assets/cardright4.svg'
import img10 from '../assets/cardright5.svg'
import img11 from '../assets/cardright6.svg'
import Cards from './Cards';

const Section = () => {
  return (
    <>
      <div className="section">
        <div className='section-imageWrapper-left'>
          <img className='section-image1' src={img1} alt='img1' />
          <img className='section-image2' src={img2} alt='img2' />
          <img className='section-image3' src={img3} alt='img3' />
          <img className='section-image4' src={img4} alt='img4' />
          <img className='section-image5' src={img5} alt='img5' />
          <div className='section-imageWrapper-right'>
            <img className='section-image6' src={img6} alt='img6' />
            <img className='section-image7' src={img7} alt='img7' />
            <img className='section-image8' src={img8} alt='img8' />
            <img className='section-image9' src={img9} alt='img9' />
            <img className='section-image10' src={img10} alt='img10' />
            <img className='section-image11' src={img11} alt='img11' />
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Section;
