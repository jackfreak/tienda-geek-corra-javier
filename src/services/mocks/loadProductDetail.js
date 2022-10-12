/**
 * loadProductDetail mock service module.
 *
 * @author Javier Alejandro Corra
 */

import productsJSONData from '../data/products.json';

/**
 * Load the details of a product.
 * @returns
 */
const loadProductDetail = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productDetail = productsJSONData.find(prod => prod.id === Number(id));

            resolve(productDetail);
        }, 500);
    });
};

export {
    loadProductDetail
}
