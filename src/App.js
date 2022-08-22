import './App.scss';
import heroBanner1 from './assets/images/heroBanner1.webp';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar />

      {
      // Simulated Hero Banner
      }
      <Container>
        <img className='img-fluid' src={heroBanner1} alt='Hero 1'/>
      </Container>
    </div>
  );
}

export default App;
