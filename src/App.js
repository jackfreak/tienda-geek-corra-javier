import './App.scss';

import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { HeroBanner } from './components/HeroBanner/HeroBanner';

function App() {
  return (
    <div className="App">
      <Header />

      <HeroBanner />

      <ItemListContainer />
    </div>
  );
}

export default App;
