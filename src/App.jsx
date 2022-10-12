/**
 * App component.
 *
 * @author Javier Alejandro Corra
 */

import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/ui/header/Header/Header';
import { HeroBanner } from './pages/home/HeroBanner/HeroBanner';

import { ItemListContainer } from './components/productList/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/productDetail/ItemDetailContainer/ItemDetailContainer';
import { ContactPage } from './pages/contact/ContactPage/ContactPage';
import { Error404 } from './components/misc/Error404/Error404';
import { BreadcrumbBar } from './components/misc/BreadcrumbBar/BreadcrumbBar';
import { Footer } from './components/ui/footer/Footer/Footer';
import { CartPage } from './pages/cart/CartPage/CartPage';
import { AppRoute } from './utils/constants/AppRoute';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { LoginScreen } from './pages/login/LoginScreen/LoginScreen';
import { AdminPanel } from './pages/admin/AdminPanel/AdminPanel';
import { CheckoutPage } from './pages/checkout/CheckoutPage/CheckoutPage';
import { RegistrationScreen } from './pages/registration/RegistrationScreen/RegistrationScreen';
import { UserProfileScreen } from './pages/userProfile/UserProfileScreen/UserProfileScreen';
import { ProtectedRoute } from './components/misc/ProtectedRoute/ProtectedRoute';

import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';



function App() {
    // Set locale globally
    dayjs.locale('es-mx');

    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <div className='App'>
                        <Header />

                        <Routes>
                            <Route path={AppRoute.Home} element={<HeroBanner />} />
                            <Route path='*' element={null} />
                        </Routes>

                        <BreadcrumbBar />

                        <main className='container'>
                            <Routes>
                                <Route path={AppRoute.Home} element={<ItemListContainer />} />

                                <Route path={AppRoute.Login} element={<LoginScreen />} />
                                <Route path={AppRoute.Registration} element={<RegistrationScreen />} />

                                <Route path={AppRoute.UserProfile} element={
                                    <ProtectedRoute>
                                        <UserProfileScreen />
                                    </ProtectedRoute>
                                } />

                                <Route path={AppRoute.AdminPanel} element={
                                    <ProtectedRoute redirectPath={AppRoute.Home}>
                                        <AdminPanel />
                                    </ProtectedRoute>
                                } />


                                <Route path={AppRoute.Category + '/:categoryId'} element={<ItemListContainer />} />
                                <Route path={AppRoute.Product + '/:itemId'} element={<ItemDetailContainer />} />

                                <Route path={AppRoute.Contact} element={<ContactPage />} />

                                <Route path={AppRoute.Cart} element={<CartPage />} />
                                <Route path={AppRoute.Checkout} element={<CheckoutPage />} />


                                <Route path='*' element={<Error404 />} />
                            </Routes>
                        </main>

                        <Footer />
                    </div>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
