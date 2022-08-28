import React, { useEffect, useState } from 'react';
import { MemoryCard } from './MemoryCard';
import './MemoryCardContainer.css';
import _ from 'lodash';

const MemoryCardContainer = () => {
  const CARDS_COUNT = 12;
  const [cards, setCards] = useState([]);

  const handleClick = () => {
    console.log('card has been clicked');
  };

  const shuffle = () => {
    setCards((prevCards) => {
      return _.shuffle(prevCards);
    });
  };

  useEffect(() => {
    let initial_cards = [];
    for (let i = 0; i < CARDS_COUNT; i++) {
      initial_cards.push(
        <MemoryCard key={i} onCardClick={shuffle} index={i} />
      );
    }
    setCards(initial_cards);
  }, []);

  return <div className="memory-card-container">{cards}</div>;
};

export { MemoryCardContainer };
