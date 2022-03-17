import React from 'react';
import patternDivider from './assets/images/pattern-divider-mobile.svg';
import dice from './assets/images/icon-dice.svg';

const container = () => {
  return (
    <>
      <div className='container'>
        <div className='adviceNumber'>Advice #117</div>
        <div className='adviceQuote'>
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </div>
        <div className='lineBreak'>
          <hr></hr>
          <img src={patternDivider} alt='pattern divider' />
          <hr></hr>
        </div>
      </div>
      <div className='diceButton'>
        <button>
          <img src={dice} alt='' />
        </button>
      </div>
    </>
  );
};

export default container;
