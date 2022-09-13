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
import { Footer } from './components/footer/Footer/Footer';
import { CartContainer } from './components/checkout/CartContainer/CartContainer';


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

                <main>
                    <Routes>
                        <Route path='/' element={ <ItemListContainer /> } />
                        <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} />

                        <Route path='/contact' element={<ContactContainer></ContactContainer>} />
                        <Route path='/cart' element={ <CartContainer></CartContainer> } />
                        <Route path='*' element={ <Error404 /> } />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
