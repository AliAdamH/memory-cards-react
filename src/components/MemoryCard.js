import React from 'react';
import './MemoryCard.css';

const MemoryCard = (props) => {
  return (
    <div
      className="memory-card"
      onClick={props.onCardClick}
      data-index={props.index}
    >
      This card works ! {props.index}
    </div>
  );
};

export { MemoryCard };
