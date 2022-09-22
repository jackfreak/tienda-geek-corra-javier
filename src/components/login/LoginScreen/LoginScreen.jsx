/**
 * LoginScreen component.
 *
 * @author Javier Alejandro Corra
 */

import { useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import './LoginScreen.scss';


const LoginScreen = () => {
    const { login } = useLoginContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

        login(user.email, user.pass);
    };

    return (
        <section className='container'>
            <div className='login-screen'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='emailInput' className='form-label'>E-mail</label>
                        <input
                            type='email'
                            name='email'
                            id='emailInput'
                            className='form-control'
                            autoComplete='email'
                            placeholder='email@email.com'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='passwordInput' className='form-label'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='passwordInput'
                            className='form-control'
                            autoComplete='current-password'
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>

        </section>
    );
};


export {
    LoginScreen
}
