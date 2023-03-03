import React from 'react';

const ActionCard = () => {
  return (
    <div className="action_card_container">
      <div className="action_card_wrapper">
        <div className="inner_wrapper">
          <p className>OPCode #4923</p>
          <div className="border_button">
            <p>00</p>{' '}
          </div>
        </div>
        <div className="inner_wrapper">
          <p className>Name</p>
          <div className="border_button">
            <p>STOP</p>
          </div>
        </div>
        <div className="inner_wrapper">
          <p className>Minimum Gas</p>
          <div className="border_button">
            <p>000</p>
          </div>
        </div>
      </div>
      <div className="card_action_button">BUY NFT</div>
    </div>
  );
};

export default ActionCard;
