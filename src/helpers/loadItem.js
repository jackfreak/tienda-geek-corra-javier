import productsJSONData from '../data/products.json';

/**
 * Load the details of an item
 * @returns
 */
const loadItem = (id) => {
    console.warn('loadItem');

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const itemData = productsJSONData.find(item => Number(item.id) === id);

            resolve(itemData);
        }, 3000);
    });
};

export {
    loadItem
}
