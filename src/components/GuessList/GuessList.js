import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessList({list}) {
  return (
    <div className="guess-results">
       {range(6).map((num) => <Guess key={num} word={list[num]}/>)}
    </div>
  );
}

export default GuessList;
