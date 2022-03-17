import React from 'react'
import patternDivider from './assets/images/pattern-divider-mobile.svg';

const adviceContent = ({advice}) => {
  return (
    <div>
      <div className='adviceNumber'>Advice #{advice.id}</div>
      <div className='adviceQuote'>{advice.advice}</div>
      <div className='lineBreak'>
        <div className='imgContainer'>
          <img src={patternDivider} alt='pattern divider' />
        </div>
      </div>
    </div>
  );
}

export default adviceContent