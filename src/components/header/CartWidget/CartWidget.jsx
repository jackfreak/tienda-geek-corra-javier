/**
 * CartWidget component.
 *
 * @author Javier Alejandro Corra
 */

import './CartWidget.scss';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import { BsCart2 } from 'react-icons/bs';
import { AppRoute } from '../../../constants/AppRoute';


const CartWidget = () => {
    const { getCartQuantity } = useCartContext();

    return (
        <div className='cart-widget'>
            <Link to={ AppRoute.Cart } className='btn btn-dark cart-widget__btn'>
                <div className='cart-widget__btn-top'>
                    <BsCart2 className='cart-widget__icon' />
                    <span className='cart-widget__qty'>({ getCartQuantity() })</span>
                </div>

                <span className='cart-widget__btn-label visually-hidden'>Mi Carrito</span>
            </Link>
        </div>
    );
};


export {
    CartWidget
}
