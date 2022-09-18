/**
 * Cart Context / Provider
 *
 * @author Javier Alejandro Corra
 */

import { createContext, useContext, useState } from 'react';


/**
 * Context
 */
const CartContext = createContext();


const useCartContext = () => {
    return useContext(CartContext);
};


/**
 * Provider
 * @param children Array of children
 * @returns
 */
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart([...cart, item]);
    }

    function removeFromCart(id) {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    function isInCart(id) {
        return cart.some((item) => item.id === id);
    }

    function isCartEmpty() {
        return (cart.length === 0);
    }

    function getCartQuantity() {
        return cart.reduce((previousValue, currentItem) => previousValue + currentItem.quantity, 0);
    }

    function getCartTotalPrice() {
        return cart.reduce((previousValue, item) => previousValue + (item.quantity * item.price), 0)
    }

    function emptyCart() {
        setCart([]);
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            isInCart,
            isCartEmpty,
            getCartQuantity,
            getCartTotalPrice,
            emptyCart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export {
    CartContext,
    CartProvider,
    useCartContext,
}
