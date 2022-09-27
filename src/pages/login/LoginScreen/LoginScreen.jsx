/**
 * LoginScreen component.
 *
 * @author Javier Alejandro Corra
 */

import './LoginScreen.scss';
import { useLoginContext } from '../../../contexts/LoginContext';
import { useForm } from '../../../hooks/useForm';

const LoginScreen = () => {
    const { login } = useLoginContext();

    const { formData, handleInputChange } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

        login(formData.email, formData.password);
    };

    return (
        <section className='container'>
            <div className='login-screen'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='emailInput' className='form-label'>
                            E-mail
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='emailInput'
                            className='form-control'
                            autoComplete='email'
                            placeholder='email@email.com'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='passwordInput' className='form-label'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            id='passwordInput'
                            className='form-control'
                            autoComplete='current-password'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export { LoginScreen };
