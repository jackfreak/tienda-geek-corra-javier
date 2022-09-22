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
        isLogged: false,
    });


    /**
     *
     * @param {string} email
     * @param {string} pass
     */
    function login(email, pass) {
        const match = ALLOWED_USERS.find((user) => user.email === email);

        if (match) {
            if (match.password === pass) {
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
