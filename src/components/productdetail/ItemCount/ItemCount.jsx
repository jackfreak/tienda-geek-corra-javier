/**
 * ItemCount component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemCount.scss'
import { Counter } from '../../ui/Counter/Counter';


const ItemCount = ({ stock, count, setCount, onAddToCart }) => {
    return (
        (stock > 0) &&
        <div className='item-count'>
            <Counter stock={stock} count={count} setCount={setCount} />

            <button type='button'
                className='item-count__add-to-cart-btn btn btn-success mt-3'
                disabled={(stock <= 0) || (count === 0)}
                onClick={() => onAddToCart(count)}>
                Añadir al carrito
            </button>
        </div>
    );
};


export {
    ItemCount
}
