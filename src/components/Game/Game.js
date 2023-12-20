import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = React.useState([]);

  function handleSubmit(newGuess) {
    const newList = [...list, newGuess];
    setList(newList);
  }
  
  return (
    <>
      <GuessList list={list} />
      <GuessInput handleSubmit={handleSubmit}/>
    </>
  );
}

export default Game;
