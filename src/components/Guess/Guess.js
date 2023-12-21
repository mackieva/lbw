import React from 'react';
import { range } from '../../utils';

function Guess({word}) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return <span className={word ? `cell ${word[num].status}` : 'cell'}>{word ? word[num].letter : ''}</span>;
      })}
    </p>
  );
}

export default Guess;
