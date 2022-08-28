import { useState } from 'react';
import './App.css';
import { MemoryCardContainer } from './components/MemoryCardContainer';
import { Notifications } from './components/Notifications';
import { Score } from './components/Score';

const App = (props) => {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const handleScoreUpdate = (value) => {
    setScore(value);
  };

  const handleRoundUpdate = (value) => {
    setRound(value);
  };

  return (
    <div>
      <Score value={score} roundnum={round} />
      <MemoryCardContainer
        scoreUpdate={handleScoreUpdate}
        updateRound={handleRoundUpdate}
      />
      <Notifications />
    </div>
  );
};

export default App;
