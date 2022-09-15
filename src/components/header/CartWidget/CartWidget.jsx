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
    const { getCartQuantity } = useCartContext();

    return (
        <Link to='/cart' className='btn btn-dark btn-cart-widget ms-2'>
            <BsCart2 />
            <span className='ms-1'>Cart</span>
            <span>({ getCartQuantity() })</span>
        </Link>
    );
};


export {
    CartWidget
}
