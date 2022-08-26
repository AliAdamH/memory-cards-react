import React, { useState } from 'react';
import { MemoryCard } from './MemoryCard';
import './MemoryCardContainer.css';
const MemoryCardContainer = () => {
  const [cards, setCards] = useState([]);

  const shuffle = () => {
    setCards((prevCards) => {
      return [...prevCards];
    });
  };

  return (
    <div className="memory-card-container">
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
  );
};

export { MemoryCardContainer };
