/**
 * CartWidget component.
 *
 * @author Javier Alejandro Corra
 */

import './CartWidget.scss';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import { BsCart2 } from 'react-icons/bs';
//import Button from 'react-bootstrap/Button';


const CartWidget = () => {
    const { getCartQuantity, isCartEmpty } = useCartContext();

    return (
        <div className='cart-widget'>
            <Link to='/cart' className={`btn btn-dark cart-widget__btn ms-2 ${ isCartEmpty() ? 'cart-widget__btn--hidden' : '' }`}>
                <BsCart2 />
                <span className='ms-1'>Cart</span>
                <span>({ getCartQuantity() })</span>
            </Link>
        </div>
    );
};


export {
    CartWidget
}
