import './App.css';
import { MemoryCard } from './components/MemoryCard';
import { MemoryCardContainer } from './components/MemoryCardContainer';
import { Notifications } from './components/Notifications';
import { Score } from './components/Score';

const App = (props) => {
  return (
    <div>
      <h1>App Works ! and</h1>
      <MemoryCardContainer />
      <Notifications />
      <Score />
    </div>
  );
};

export default App;
