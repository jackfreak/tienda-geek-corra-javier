/**
 * loadItem mock service module.
 *
 * @author Javier Alejandro Corra
 */

import productsJSONData from '../data/products.json';

/**
 * Load the details of an item
 * @returns
 */
const loadItem = (id) => {
    //console.warn('loadItem');

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const itemData = productsJSONData.find(item => item.id === Number(id));

            resolve(itemData);
        }, 2000);
    });
};

export {
    loadItem
}
