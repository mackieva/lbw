import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GuessBanner from '../GuessBanner/GuessBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log(answer)

function Game() {
  const [list, setList] = React.useState([]);
  const [guessCount, setGuessCount] = React.useState(0);
  const [result, setResult] = React.useState(undefined);

  function handleSubmit(newGuess) {
    const liveCount = guessCount + 1
    
    if (newGuess == answer) {
      setResult(true);
    }
    if (liveCount == 6) {
      setResult(false);
    }
    setGuessCount(liveCount);
    const checkedGuess = checkGuess(newGuess, answer);
    const newList = [...list, checkedGuess];
    setList(newList);
  }
  
  return (
    <>
      <GuessList list={list} />
      <GuessInput handleSubmit={handleSubmit} disable={result}/>
      <GuessBanner result={result} answer={answer} guessCount={guessCount} />
    </>
  );
}

export default Game;
