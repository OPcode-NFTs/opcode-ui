import React from 'react';
import Diamond from '../assets/Diamond.svg';
import '../index.css';

const TextCard = () => {
  return (
    <div className="text_card">
      <div className="content-wrapper">
        <img className="diamond_svg" width={24} height={19} src={Diamond} alt="diamond" />
        <p className="card_header">Private Club Membership</p>
        <p className="card_text">Another benefit of the product different from the header, up to three lines</p>
      </div>
    </div>
  );
};

export default TextCard;
