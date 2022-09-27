/**
 * Login Context / Provider.
 *
 * @author Javier Alejandro Corra
 */

import { useContext, useState } from "react";
import { createContext } from "react"



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


/**
 * Context
 */
const LoginContext = createContext();

const useLoginContext = () => {
    return useContext(LoginContext);
};

/**
 * Provider
 * @param {[]}} children Array of children
 * @returns
 */
const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        user: '',
        isLogged: true, // HARDCODED LOGGING STATE !!
    });


    /**
     *
     * @param {string} email
     * @param {string} password
     */
    function login(email, password) {
        console.log('LoginProvider::login', email, password);

        const match = ALLOWED_USERS.find((user) => user.email === email);

        if (match) {
            if (match.password === password) {
                setUser({
                    user: match.email,
                    isLogged: true,
                });

            } else {
                console.log('Invalid password');
            }
        } else {
            console.log('Invalid user');
        }
    }


    /**
     *
     */
    function logout() {
        setUser({
            user: '',
            isLogged: false,
        });
    }


    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout,
        }}>
            { children }
        </LoginContext.Provider>
    );
};


export {
    LoginContext,
    LoginProvider,
    useLoginContext,
}
