/**
 * Auth Context / Provider.
 *
 * @author Javier Alejandro Corra
 */

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useContext, useState } from "react";
import { createContext } from "react"
import { firebaseAuth } from '../firebase/FirebaseConfig';

const ADMIN_USERS = [
    '7ocBg4zkJPYdJzZ7BcLB9VtOqZ02', // admin@
    'Snh878m4SAQvb62xMSNQymBCSCX2', // jf@
];

/**
 * Context
 */
const AuthContext = createContext();

const useAuthContext = () => {
    return useContext(AuthContext);
};

/**
 * Provider
 * @param {[]}} children Array of children
 * @returns
 */
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);


    /**
     *
     * @returns
     */
    function isAdmin() {
        return (currentUser) && (ADMIN_USERS.indexOf(currentUser.uid) !== -1);
    }

    /**
     * Signup the user with email/password
     * @param {string} email
     * @param {string} password
     */
    async function signup(email, password) {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }


    /**
     * Login the user with email/password
     * @param {string} email
     * @param {string} password
     */
    async function login(email, password) {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }


    /**
     * Logout the current user
     */
    async function logout() {
        return signOut(firebaseAuth);
    }

    useEffect(() => {
        // https://firebase.google.com/docs/reference/js/auth.md?authuser=0&hl=en#onauthstatechanged
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setCurrentUser(currentUser);

            } else {
                // User is signed out
                setCurrentUser(null);
            }

            // Signal that the user state loading proccess is completed
            setIsUserLoading(false);
        });

        // Cleanup
        return () => {
            // Remove the observer function set by onAuthStateChanged
            unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={{
            currentUser,
            isAdmin,
            isUserLoading,
            signup,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};


export {
    useAuthContext,
    AuthContext,
    AuthProvider,
}
