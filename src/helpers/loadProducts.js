import productsJSONData from '../data/products.json';

/**
 * Load the products
 * @returns 
 */
const loadProducts = () => {
    console.log('loadProducts');

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productsJSONData);
        }, 2000);
    });
};     

export {
    loadProducts,
}