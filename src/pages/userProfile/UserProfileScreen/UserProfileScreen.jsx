/**
 * UserProfileScreen container component.
 *
 * @author Javier Alejandro Corra
 */

import './UserProfileScreen.scss';
//import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
//import { AppRoute } from '../../../utils/constants/AppRoute';
import { OrderListContainer } from '../OrderListContainer/OrderListContainer';

// https://youtu.be/H_vEJt5Id_I?t=4654
const UserProfileScreen = () => {
    const { currentUser } = useAuthContext();

    // TODO: is this neccessary ? we already have the ProtectedRoute wrapper
    /*
    if (isUserLoading) {
        return <Loader />;
    }
    */

    return (
        <section className='user-profile-screen'>
            <h2>Mi cuenta</h2>

            <div className='user-profile'>
                <p className='user-profile__name'>{currentUser.email}</p>

                {
                    (!currentUser.emailVerified) && <p className='my-3  text-danger'>E-mail sin verificar.</p>
                }

            </div>

            <OrderListContainer />
        </section>
    );
};


export {
    UserProfileScreen
}
