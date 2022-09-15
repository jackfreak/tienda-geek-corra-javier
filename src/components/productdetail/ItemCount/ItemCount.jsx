/**
 * ItemCount component.
 *
 * @author Javier Alejandro Corra
 */


import "./ItemCount.scss"
import { Button } from "react-bootstrap";
import { BsDash, BsPlus } from 'react-icons/bs';


const ItemCount = ({stock, initial=0, count, setCount, onAddToCart}) => {

    const handleDecrease = () => {
        setCount(Math.max(1, count - 1) );
    };


    const handleIncrease = () => {
        setCount( Math.min(stock, count + 1) );
    };


    /*
    const handleChange = (event) => {
        console.log(event.target.value);

        //const value = event.target.value === "" ? 0 : parseInt(event.target.value);
        const value = parseInt(event.target.value)
        if(value !== NaN) {
            setCount( value );
        }

    };
    */


    return (
        (stock > 0) &&
        <div className="item-count">
			<div className="item-count__quantity">
                <Button className="item-count__decrease-btn"
                    variants="secondary"
                    onClick={handleDecrease}>
                    <span className="visually-hidden">Remover item</span>
                    <BsDash />
                </Button>

                <span className="item-count__input input-group-text">{ (stock >=1) ? count : 0 }</span>

                <Button className="item-count__increase-btn"
                    variants="secondary"
                    onClick={handleIncrease}>
                    <span className="visually-hidden">Agregar item</span>
                    <BsPlus />
                </Button>
			</div>

            <Button variant="secondary" variants="dark"
                className="item-count__add-to-cart-btn"
                disabled={(stock <= 0) || (count === 0) }
                onClick={ () => onAddToCart(count) }>
                Añadir al carrito
            </Button>
		</div>
    );
};



export {
    ItemCount
}
