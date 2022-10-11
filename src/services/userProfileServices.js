/**
 * User Profile services module.
 *
 * @author Javier Alejandro Corra
 */

import { firestoreDB } from '../firebase/FirebaseConfig';
import { collection, serverTimestamp, writeBatch, query, where, documentId, getDocs, doc } from 'firebase/firestore';
import { USER_PROFILE_COLLECTION_NAME } from './helpers/collections.constants';
import { StatusCode } from './helpers/statusCodes.constants';



/**
 * Send a request to create a new Purchase Order after validating the stock.
 * @param {Array} cart
 * @param {Object} poData
 * @returns A PO status object containing the id of the new PO
 */
async function createUserProfile(userProfileData) {
    //console.log('createUserProfile::sendPurchaseOrder');

    // Add creation time using server-side timestamp.
    poData.createdAt = serverTimestamp();
    //console.log(poData);

    // Get a new write batch
    const batch = writeBatch(firestoreDB);

    // Get a reference to the Purchase Order collection
    const poRef = collection(firestoreDB, PURCHASE_ORDER_COLLECTION_NAME);

    // Get a reference to the Products collection
    const productsRef = collection(firestoreDB, PRODUCTS_COLLECTION_NAME);

    // Build the query
    const productIds = cart.map((item) => item.id);
    const q = query(productsRef, where(documentId(), 'in', productIds));

    // Get the updated info of all the products we want to purchase so we can validate their stock.
    const productsDocs = await getDocs(q);

    const outOfStock = [];

    productsDocs.docs.forEach((doc) => {
        // Find the product item in the cart that corresponds to the product doc we just got
        const prodInCart = cart.find((prod) => prod.id === doc.id);

        // Check stock for this item
        if (doc.data().stock >= prodInCart.quantity) {
            // Update the product stock
            // @see https://firebase.google.com/docs/reference/js/firestore_.writebatch.md#writebatchupdate
            batch.update(doc.ref, {
                stock: doc.data().stock - prodInCart.quantity
            });

        } else {
            outOfStock.push({
                ...prodInCart,
            });
        }
    });

    //console.log('outOfStock', outOfStock);

    if (outOfStock.length === 0) {
        // Stock checks out!, now we can create our purchase order...

        // There is no addDoc equivalent for writeBatch, so we create a
        // new doc ref with an autogenerated ID.
        // @see https://firebase.google.com/docs/reference/js/firestore_.md#doc_2
        const poDocRef = doc(poRef);

        // @see https://firebase.google.com/docs/reference/js/firestore_.writebatch.md#writebatchset
        batch.set(poDocRef, poData);

        try {
            await batch.commit();

            return {
                poId: poDocRef.id,
                status: StatusCode.SUCCESS,
            };

        } catch (err) {
            return {
                poId: '',
                error: err,
                status: StatusCode.BATCH_ERROR,
            };
        }

    } else {
        return {
            poId: '',
            outOfStock,
            status: StatusCode.OUT_OF_STOCK,
        };
    }
};


/**
 * Load a list of purchase orders by a given user.
 * @param {string} userEmail
 * @returns
 */
async function loadUserProfile(userEmail = null) {
    //console.log('loadPurchaseOrders', userEmail);

    // Get a reference to the Purchase Order collection
    const poRef = collection(firestoreDB, PURCHASE_ORDER_COLLECTION_NAME);

    // Query
    // , orderBy('createdAt', 'desc')
    const q = query(poRef, where('buyerInfo.email', '==', userEmail));

    // getDocs returns a Promise so we use await. When it is resolved it returns a QuerySnapshot.
    // https://firebase.google.com/docs/reference/js/firestore_.querysnapshot.md#querysnapshot_class
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return [];
    }

    const orders = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return orders;
};


export {
    createUserProfile,
}
