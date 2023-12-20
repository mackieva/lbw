import React from 'react';

function GuessList({list}) {
  console.log({list})
  return (
    <div className="guess-results">
      {list.map((item) =><p className='guess'>{item}</p>)}
    </div>
  );
}

export default GuessList;
