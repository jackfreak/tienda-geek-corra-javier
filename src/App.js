import './App.scss';

import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { HeroBanner } from './components/HeroBanner/HeroBanner';

function App() {
  return (
    <div className="App">
      <Header />

      <HeroBanner />

      <ItemListContainer>
        <ProductCard 
          id='1' 
          name='PlayStation DualSense Wireless Controller - Midnight Black' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas egestas nibh, eu lacinia justo scelerisque a.'
          image='./images/61O9tWR6WDS._AC_UY218_.jpg'
        />

        <ProductCard 
          id='2'
          name='Xbox Core Wireless Controller – Carbon Black'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas egestas nibh, eu lacinia justo scelerisque a.'
          image='./images/61z3GQgEPZL._AC_UY218_.jpg'/>

        <ProductCard 
          id='3'
          name='Nintendo Switch Pro Controller' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas egestas nibh, eu lacinia justo scelerisque a.'
          image='./images/61drpi3cYUL._AC_UY218_.jpg' />
      </ItemListContainer>
    </div>
  );
}

export default App;
