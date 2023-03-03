import React from 'react';
import Opcode from '../assets/OPCodeopcode.svg';
import Groupwallet from '../assets/Groupwallet.svg'
import '../index.css';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="header">
        <img className="logo" src={Opcode} alt="op_code" />
        <ul className="ul">
          <li>Shop NFTs</li>
          <li>My NFTs</li>
          <li>Blog</li>
          <li className='wallet'><img src={Groupwallet} alt="wallet" /><p>connect wallet</p></li>
        </ul>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Header;
