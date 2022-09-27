/**
 * App component.
 *
 * @author Javier Alejandro Corra
 */

import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header/Header';
import { HeroBanner } from './pages/home/HeroBanner/HeroBanner';
import { ItemListContainer } from './components/productlist/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/productdetail/ItemDetailContainer/ItemDetailContainer';
import { ContactContainer } from './pages/contact/ContactContainer';
import { Error404 } from './components/misc/Error404/Error404';
import { BreadcrumbBar } from './components/misc/BreadcrumbBar/BreadcrumbBar';
import { Footer } from './components/footer/Footer/Footer';
import { CartContainer } from './pages/cart/CartContainer/CartContainer';
import { AppRoute } from './utils/constants/AppRoute';
import { CartProvider } from './contexts/CartContext';
import { LoginProvider } from './contexts/LoginContext';
import { LoginScreen } from './pages/login/LoginScreen/LoginScreen';
import { AdminPanel } from './pages/admin/AdminPanel/AdminPanel';
import { Checkout } from './pages/checkout/Checkout/Checkout';

function App() {
    //const { user } = useLoginContext();

    return (
        <LoginProvider>
            <CartProvider>
                <BrowserRouter>
                    <div className='App'>
                        <Header />

                        <Routes>
                            <Route path={AppRoute.Root} element={<HeroBanner />} />
                            <Route path='*' element={null} />
                        </Routes>

                        <BreadcrumbBar />

                        <main>
                            <Routes>
                                <Route path={AppRoute.Root} element={<ItemListContainer />} />

                                <Route path={AppRoute.Login} element={<LoginScreen></LoginScreen>} />

                                <Route path={AppRoute.Category + '/:categoryId'} element={<ItemListContainer />} />
                                <Route path={AppRoute.Product + '/:itemId'} element={<ItemDetailContainer />} />

                                <Route path={AppRoute.Contact} element={<ContactContainer></ContactContainer>} />
                                <Route path={AppRoute.Cart} element={<CartContainer></CartContainer>} />
                                <Route path={AppRoute.Checkout} element={<Checkout></Checkout>} />

                                <Route path={AppRoute.AdminPanel} element={<AdminPanel></AdminPanel>} />

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
