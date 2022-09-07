/**
 * App component.
 *
 * @author Javier Alejandro Corra
 */

import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header/Header';
import { HeroBanner } from './components/home/HeroBanner/HeroBanner';
import { ItemListContainer } from './components/productlist/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/productdetail/ItemDetailContainer/ItemDetailContainer';
import { ContactContainer } from './components/contact/ContactContainer';
import { Error404 } from './components/misc/Error404/Error404';
import { BreadcrumbBar } from './components/misc/BreadcrumbBar/BreadcrumbBar';


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route path='/' element={<HeroBanner />} />
                    <Route path='*' element={ null } />
                </Routes>

                <BreadcrumbBar />

                <Routes>
                    <Route path='/' element={ <ItemListContainer /> } />
                    <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />

                    <Route path='/contacto' element={ <ContactContainer></ContactContainer> } />
                    <Route path='*' element={ <Error404 /> } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
