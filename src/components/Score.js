import React from 'react';

const Score = (props) => {
  return (
    <div
      className="score"
      style={{
        backgroundColor: 'red',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
      }}
    >
      <span>Streak: 1</span>
      <span>Wins: 3</span>
    </div>
  );
};

export { Score };
