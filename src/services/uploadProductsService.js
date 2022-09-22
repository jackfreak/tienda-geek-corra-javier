/**
 * Products services module.
 *
 * @author Javier Alejandro Corra
 */

import { db } from '../../firebase/FirebaseConfig';
import { writeBatch, doc } from 'firebase/firestore';
import products from '../mocks/data/products.json';

const COLLECTION_NAME = 'products';


/**
 * Set  a list of product items.
 * @returns
 */
async function createProducts() {
    console.log('createProducts');

    //const collectionRef = collection(db, COLLECTION_NAME);

    // Get a new write batch
    const batch = writeBatch(db);

    products.forEach((item, index) => {
        const id = 'p' + item.id;

        delete item.id;

        console.log(id, item);

        // Use this to keep the id's
        const docRef = doc(db, COLLECTION_NAME, id);

        // Use this to add a new document with an auto-generated id
        //const docRef = doc(collectionRef);

        batch.set(docRef, item);
    });


    await batch.commit();

    console.log('success');
};


export {
    createProducts
}



