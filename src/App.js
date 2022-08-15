import logoTiendaGeek from './logo-tienda-geek.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidxs a <span className="visually-hidden">Tienda Geek</span></h1>

        <img src={logoTiendaGeek} className="logo-tienda" alt="Logo Tienda Geek" />

        <p>
          Comics, Manga, Anime, Action-Figures y todo lo que buscas.
        </p>
        <a
          className="App-link"
          href="#"
          target="_self"
          rel="noopener noreferrer"
        >
          Ingresar
        </a>
      </header>
    </div>
  );
}

export default App;
