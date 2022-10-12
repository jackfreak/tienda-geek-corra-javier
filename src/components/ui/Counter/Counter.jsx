/**
 * Counter component.
 *
 * @author Javier Alejandro Corra
 */


import './Counter.scss'
import { BsDash, BsPlus } from 'react-icons/bs';


const Counter = ({ stock, count, setCount }) => {

    const handleDecrease = () => {
        setCount(Math.max(1, count - 1));
    };

    const handleIncrease = () => {
        setCount(Math.min(stock, count + 1));
    };

    return (
        <div className='counter input-group' role='group'>
            <button type='button' className='counter__decrease-btn btn btn-primary'
                onClick={handleDecrease}>
                <span className='visually-hidden'>Remover item</span>
                <BsDash />
            </button>

            <span className='counter__quantity input-group-text'>{(stock >= 1) ? count : 0}</span>

            <button type='button' className='counter__increase-btn btn btn-primary'
                onClick={handleIncrease}>
                <span className='visually-hidden'>Agregar item</span>
                <BsPlus />
            </button>
        </div>
    );
};


export {
    Counter
}
