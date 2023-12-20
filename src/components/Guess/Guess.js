import React from 'react';
import { range } from '../../utils';

function Guess({word}) {
  return (
    <p className="guess">
      {range(5).map((num) => <span className="cell">{word ? word[num] : ''}</span>)}
    </p>
  );
}

export default Guess;
