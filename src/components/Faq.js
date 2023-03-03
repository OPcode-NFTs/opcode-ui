import React, { useState } from 'react';
import Groupplus from '../assets/Groupplus.svg';
import Eth1 from '../assets/Eth1.svg';
import Eth2 from '../assets/Eth2.svg';
import Eth3 from '../assets/Eth3.svg';
import FAQFaq from '../assets/FAQFaq.svg';
import '../index.css';

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('')
  const clickHandler = (id) => {
    setId(id)
    setOpen(!open);
  };
  return (
    <div className="faq-section">
      <div className='faq-imgaeWrapper'>
        <img className="faq-image" src={FAQFaq} alt="firesSpot" />
        <img className="faq-eth1" src={Eth1} alt="fireSpot" />
        <img className="faq-eth2" src={Eth2} alt="firesSpot" />
        <img className="faq-eth3" src={Eth3} alt="fireSspot" />
      </div>
      <div className="faq-frame" >
        <div>
          <div className="faq-frame-div">
            <p>Is there a discords?</p>
            <img onClick={()=>clickHandler(1)} src={Groupplus} alt="firedfSpot" />
          </div>
          <div>{id=="1" && open && <div className="faq-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse qui nemo iusto repellendus voluptatibus assumenda laboriosam reiciendis? Atque eligendi suscipit commodi omnis autem aspernatur, dolorem qui quasi explicabo voluptatum.</div>}</div>
          <div className="faq-divider"></div>
        </div>
        <div>
          <div className='faq-frame-div'>
            <p>Is there guarantee mint allowlist?</p>
            <img onClick={()=>clickHandler(2)} src={Groupplus} alt="firedSpot" />
          </div>
          <div>{id=="2" && open && <div className="faq-content">Is there guarantee mint allowlist?</div>}</div>
          <div className="faq-divider"></div>
        </div>
        <div>
          <div className='faq-frame-div'>
            <p>Is there a future roadmap?</p>
            <img onClick={()=>clickHandler(3)} src={Groupplus} alt="firedSpot" />
          </div>
          <div>{ id=="3" && open && <div className="faq-content">Is there a future roadmap?</div>}</div>
          <div className="faq-divider"></div>
        </div>
        <div>
          <div className='faq-frame-div'>
            <p>What is the maximum mint per wallet?</p>
            <img onClick={()=>clickHandler(4)} src={Groupplus} alt="firedSpot" />
          </div>
          <div>{ id=="4" && open && <div className="faq-content">What is the maximum mint per wallet?</div>}</div>
          <div className="faq-divider"></div>
        </div>
        <div>
          <div className='faq-frame-div'>
            <p>What are the rewards for nesting?</p>
            <img onClick={()=>clickHandler(5)} src={Groupplus} alt="firedSpot" />
          </div>
          <div>{ id=="5" && open && <div className="faq-content">What are the rewards for nesting?</div>}</div>
          <div className="faq-divider"></div>
        </div>
        <div>
          <div className='faq-frame-div'>
            <p>What are the rewards for nesting?</p>
            <img onClick={()=>clickHandler(6)} src={Groupplus} alt="firedSpot" />
          </div>
          <div>{id=="6" && open && <div className="faq-content">What are the rewards for nesting?</div>}</div>
          <div className="faq-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
