import "./ItemCount.scss"
import { useState } from "react";
import { Button } from "react-bootstrap";



const ItemCount = ({itemData, stock, initial=0, addToCart}) => {

    const [count, setCount] = useState(initial);


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
        <div className="item-count">
			<div className="item-count__quantity">
                <Button className="item-count__decrease-btn"
                    variants="secondary"
                    onClick={handleDecrease}>
                    <span className="visually-hidden">Remover item</span>
                    <i className="bi bi-dash"></i>
                </Button>

                <span className="item-count__input input-group-text">{ (stock >=1) ? count : 0 }</span>

                <Button className="item-count__increase-btn"
                    variants="secondary"
                    onClick={handleIncrease}>
                    <span className="visually-hidden">Agregar item</span>
                    <i className="bi bi-plus"></i>
                </Button>
			</div>

            <Button variant="secondary" variants="dark"
                className="item-count__add-to-cart-btn"
                disabled={(stock <= 0) || (count === 0) }
                onClick={ () => addToCart(count) }>
                Añadir al carrito
            </Button>
		</div>
    );
};



export {
    ItemCount
}
