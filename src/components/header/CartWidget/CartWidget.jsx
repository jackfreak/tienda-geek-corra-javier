import './CartWidget.scss';
import Button from 'react-bootstrap/Button';



const CartWidget = ({qty = 0}) => {
    return (
        <Button className='btn-cart-widget ms-2' variant='light'>
            <i className="bi bi-cart2"></i>
            <span className='ms-1'>Cart</span>
            <span>({qty})</span>
        </Button>
    );
};


export {
    CartWidget,
}