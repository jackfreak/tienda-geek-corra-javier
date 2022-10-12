/**
 * Products services module.
 *
 * @author Javier Alejandro Corra
 */


import { writeBatch, doc, collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../firebase/FirebaseConfig';
import products from './mocks/data/products.json';
import { PRODUCTS_COLLECTION_NAME } from './helpers/collections.constants';


/**
 * Set  a list of product items.
 * @returns
 */
async function createProducts() {
    // Get a new write batch
    const batch = writeBatch(firestoreDB);

    products.forEach((item, index) => {
        // Custom id
        const id = 'p' + item.id;

        // Delete json id from the object
        delete item.id;

        // Create a doc reference using our custom id
        const docRef = doc(firestoreDB, PRODUCTS_COLLECTION_NAME, id);

        batch.set(docRef, item);
    });


    await batch.commit();
};


/**
 * Reset the stock of all the products to 10.
 * @returns
 */
async function resetStock() {
    const STOCK_VALUE = 10;

    // Get a new write batch
    const batch = writeBatch(firestoreDB);

    // Get a reference to the Products collection
    const productsRef = collection(firestoreDB, PRODUCTS_COLLECTION_NAME);

    // Get all the products
    const productsDocs = await getDocs(productsRef);

    if (productsDocs.empty) {
        return;
    }

    productsDocs.docs.forEach((doc) => {
        // Update the product stock
        // @see https://firebase.google.com/docs/reference/js/firestore_.writebatch.md#writebatchupdate
        batch.update(doc.ref, {
            stock: STOCK_VALUE
        });
    });

    try {
        await batch.commit();

    } catch (err) {
        console.error(err);
    }
};

export {
    createProducts,
    resetStock,
}



