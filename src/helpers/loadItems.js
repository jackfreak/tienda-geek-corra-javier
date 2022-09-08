/**
 * loadItems mock service module.
 *
 * @author Javier Alejandro Corra
 */

import productsJSONData from '../data/products.json';

/**
 * Load a list of product items
 * @returns
 */
const loadItems = () => {
    //console.warn('loadItems');

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productsJSONData);
        }, 2000);
    });
};

export {
    loadItems
}
