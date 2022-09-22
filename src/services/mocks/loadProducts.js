/**
 * loadProducts mock service module.
 *
 * @author Javier Alejandro Corra
 */

import productsJSONData from '../data/products.json';


/**
 * Load a list of product items.
 * @returns
 */
const loadProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsJSONData);
        }, 500);
    });
};

export {
    loadProducts
}
