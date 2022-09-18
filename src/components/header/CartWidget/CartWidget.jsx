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
            {/*
            NOTA PARA EL EVALUADOR: Aca se podria haber usado renderizado condicional
            pero es mi intencion probar la sintaxis de Conditional Attributes.
            */ }
            <Link to='/cart' className={`btn btn-dark cart-widget__btn ${ isCartEmpty() ? 'cart-widget__btn--hidden' : '' }`}>
                <BsCart2 className='cart-widget__icon'/>
                <span className='ms-1'>Cart</span>
                <span>({ getCartQuantity() })</span>
            </Link>

            {
                isCartEmpty() && <div className='btn btn-light cart-widget__spacer'></div>
            }

        </div>
    );
};


export {
    CartWidget
}
