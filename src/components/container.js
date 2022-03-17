import React from 'react';


import AdviceContent from './adviceContent';
import DiceButton from './diceButton';

const container = ({ advice, error, loading, fetchAdvice }) => {
  return (
    <>
      <div className='containerDiv'>
        {advice && <AdviceContent advice={advice} />}
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
      </div>
      <DiceButton fetchAdvice={fetchAdvice} />
    </>
  );
};

export default container;
