import React from 'react';
import Opcode from '../assets/OPCodeopcode.svg';

const Header = () => {
  return (
    <>
      <div className="footer">
        <img className="logo" src={Opcode} alt="op_code" />
        <ul className="ul">
          <li>Shop NFTs</li>
          <li>My NFTs</li>
          <li>Blog</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
