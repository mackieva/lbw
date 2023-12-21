import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log(answer)

function Game() {
  const [list, setList] = React.useState([]);

  function handleSubmit(newGuess) {
    const checkedGuess = checkGuess(newGuess, answer);
    const newList = [...list, checkedGuess];
    setList(newList);
    console.log(newList);
  }
  
  return (
    <>
      <GuessList list={list} />
      <GuessInput handleSubmit={handleSubmit}/>
    </>
  );
}

export default Game;
