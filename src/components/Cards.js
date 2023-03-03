import React from 'react';
import ActionCard from './ActionCard';
import TextCard from './TextCard';

const Cards = () => {
  return (
    <div className="cards_wrapper">
      <div className="text_container">
        <h1 className="card_container_header">OPCode is more than just another NFT Ecosystem</h1>
        <p className="subheader_text">
          Another description of the product different from the header, it can be up to two lines. Avoid leaving one
          word alone in a sentence and using periods at the end of a paragraph
        </p>
      </div>

      <div className="cards_container">
        <TextCard />
        <TextCard />
        <TextCard />
      </div>
      <div>
        <div className="text_container">
          <h1 className="card_container_header">Explore OPCode Catalog</h1>
        </div>
        <div className="cards_container">
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <ActionCard />
        </div>
      </div>
      <button className="section-button">Explore all NFTs</button>
    </div>
  );
};

export default Cards;
