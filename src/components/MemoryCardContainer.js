import React, { useEffect, useState } from 'react';
import { MemoryCard } from './MemoryCard';
import './MemoryCardContainer.css';
import _ from 'lodash';

const MemoryCardContainer = ({ scoreUpdate, updateRound }) => {
  const CARDS_COUNT = 12;
  const [cards, setCards] = useState([]);
  const [memorizedCards, setMemorizedCards] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [mousePosition, setMousePosition] = useState([0, 0]);

  const handleScoreUpdate = (element) => {
    setMemorizedCards((prev) => {
      if (!prev.includes(element.dataset.index)) {
        return [...prev, element.dataset.index];
      } else {
        if (prev.length === CARDS_COUNT) {
          setCurrentRound((previousRound) => (previousRound += 1));
        }
        return [];
      }
    });
  };

  const shuffle = (e) => {
    handleScoreUpdate(e.target);
    setMousePosition([window.scrollX, window.scrollY]);
    setCards((prevCards) => {
      return _.shuffle(prevCards);
    });
  };

  useEffect(() => {
    let [x, y] = mousePosition;
    window.scrollTo(x, y);
  }, [mousePosition]);

  useEffect(() => {
    let initial_cards = [];
    for (let i = 0; i < CARDS_COUNT; i++) {
      initial_cards.push(
        <MemoryCard key={i} onCardClick={shuffle} index={i} />
      );
    }
    setCards(initial_cards);
  }, []);

  useEffect(() => {
    if (currentRound) {
      scoreUpdate(currentRound * CARDS_COUNT + memorizedCards.length + 1);
    } else {
      scoreUpdate(memorizedCards.length);
    }
  }, [memorizedCards, scoreUpdate, currentRound]);

  useEffect(() => {
    updateRound(currentRound);
  }, [currentRound, updateRound]);
  return <div className="memory-card-container">{cards}</div>;
};

export { MemoryCardContainer };
