import './App.css';
import { MemoryCardContainer } from './components/MemoryCardContainer';
import { Notifications } from './components/Notifications';
import { Score } from './components/Score';

const App = (props) => {
  return (
    <div>
      <Score />
      <MemoryCardContainer />
      <Notifications />
    </div>
  );
};

export default App;
