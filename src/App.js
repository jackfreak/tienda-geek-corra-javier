import './App.scss';

import { Header } from './components/header/Header/Header';
import { HeroBanner } from './components/home/HeroBanner/HeroBanner';
import { ItemListContainer } from './components/productlist/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/productdetail/ItemDetailContainer/ItemDetailContainer';

function App() {
    return (
        <div className="App">
            <Header />

            <HeroBanner />

            <ItemListContainer />
            <ItemDetailContainer />
        </div>
    );
}

export default App;
