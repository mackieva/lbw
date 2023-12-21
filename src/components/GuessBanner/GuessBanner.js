import React from 'react';


function BannerWin({ guessCount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessCount} guesses</strong>.
      </p>
    </div>
  )
}

function BannerLose({answer}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

function GuessBanner({result, guessCount, answer}) {
  if (result === true) {
    return <BannerWin guessCount={guessCount}/>
  } else if (result === false) {
    return <BannerLose answer={answer}/>
  }
}

export default GuessBanner;
