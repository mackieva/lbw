import React from 'react';

function GuessInput({handleSubmit, wlist}) {
  
  const [guess, setGuess] = React.useState('');
  
  function handleForm(e) {
    e.preventDefault();
    if (guess.length != 5) {
      window.alert('Word must be 5 characters.')
      return;
    }
    handleSubmit(guess);      
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleForm}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())}/>
    </form>

  );
}

export default GuessInput;
