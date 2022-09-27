/**
 * Products services module.
 *
 * @author Javier Alejandro Corra
 */

import { db } from '../firebase/FirebaseConfig';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { PRODUCTS_COLLECTION_NAME } from './helpers/collections.constants';


/**
 * Load a list of product items. Can be filtered by categoryId.
 * @param {string} categoryId
 * @returns
 */
async function loadProducts(categoryId = null) {
    //console.warn('loadProducts');

    // Get a reference to the collection we want to use
    const productsCollection = collection(db, PRODUCTS_COLLECTION_NAME);

    // Conditionally create the query
    const q = (categoryId === null)
        ? productsCollection
        : query(productsCollection, where('categoryId', '==', categoryId));

    // getDocs returns a Promise so we use await. When it is resolved it returns a QuerySnapshot.
    // https://firebase.google.com/docs/reference/js/firestore_.querysnapshot.md#querysnapshot_class
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return [];
    }

    const products = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return products;
};


/**
 * Load the details of a single product item.
 * @returns
 */
async function loadProductDetail(productId) {
    //console.warn('loadProductDetail', productId);

    // Get a reference to the document we want to use
    const productDoc = doc(db, PRODUCTS_COLLECTION_NAME, productId);

    // getDoc returns a Promise
    const docSnapshot = await getDoc(productDoc);

    const productDetail = {
        id: docSnapshot.id,
        ...docSnapshot.data()
    };

    return productDetail;
};


export {
    loadProducts,
    loadProductDetail,
}
