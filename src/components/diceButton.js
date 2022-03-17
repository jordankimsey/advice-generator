import React from 'react'
import dice from './assets/images/icon-dice.svg';

const diceButton = ({fetchAdvice}) => {
  return (
    <div className='diceButton'>
      <button onClick={() => fetchAdvice()}>
        <img src={dice} alt='dice' onClick={() => fetchAdvice()} />
      </button>
    </div>
  );
}

export default diceButton