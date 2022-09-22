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
import { CartContainer } from './components/cart/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import { AppRoute } from './constants/AppRoute';
import { LoginProvider } from './context/LoginContext';
import { LoginScreen } from './components/login/LoginScreen/LoginScreen';
//import { AdminContainer } from './components/admin/AdminContainer/AdminContainer';


function App() {
    return (
        <LoginProvider>
            <CartProvider>
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
                                <Route path='/' element={<ItemListContainer />} />

                                <Route path={AppRoute.Login} element={<LoginScreen></LoginScreen>} />

                                <Route path={AppRoute.Category + '/:categoryId' } element={ <ItemListContainer /> } />
                                <Route path={AppRoute.Product + '/:itemId'} element={<ItemDetailContainer />} />

                                <Route path={AppRoute.Contact} element={<ContactContainer></ContactContainer>} />
                                <Route path={AppRoute.Cart} element={<CartContainer></CartContainer>} />


                                {/*
                                ADMIN TO CREATE PRODUCTS IN FIREBASE WITH A BATCH.
                                TODO: REMOVE ONCE IS NO LONGER NECCESARY
                                <Route path='/admin' element={ <AdminContainer></AdminContainer> } />
                                */}

                                <Route path='*' element={<Error404 />} />
                            </Routes>
                        </main>

                        <Footer />
                    </div>
                </BrowserRouter>
            </CartProvider>
        </LoginProvider>

    );
}

export default App;
