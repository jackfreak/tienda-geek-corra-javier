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


/*
const ALLOWED_USERS = [
    {
        email: 'admin@admin.com',
        password: 'admin',
    },
    {
        email: 'javier.alejandro.corra@gmail.com',
        password: 'qwerty',
    }
];
*/


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
    /*
    const [user, setUser] = useState({
        user: '',
        isLogged: false,
        role: ''
    });
    */
    const [user, setUser] = useState();


    /**
     * Signup the user with email/password
     * @param {string} email
     * @param {string} password
     */
    async function signup(email, password) {
        console.log('AuthProvider::signup', email, password);

        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }


    /**
     * Login the user with email/password
     * @param {string} email
     * @param {string} password
     */
    async function login(email, password) {
        console.log('AuthProvider::login', email, password);

        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }


    /**
     * Logout the current user
     */
    async function logout() {
        console.log('AuthProvider::logout');

        return signOut(firebaseAuth);

        /*
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });

        setUser({
            user: '',
            isLogged: false,
        });
        */
    }

    useEffect(() => {
        console.log('AuthProvider::mounted');

        // https://firebase.google.com/docs/reference/js/auth.md?authuser=0&hl=en#onauthstatechanged
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            console.log('onAuthStateChanged', currentUser);

            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(currentUser);
                console.log('LOGGED USER', currentUser);

            } else {
                // User is signed out
                setUser(null);
                console.log('LOGGED OUT USER', null);
            }
        });

        // Cleanup
        return () => {
            // Remove the observer function set by onAuthStateChanged
            unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={{
            user,
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
