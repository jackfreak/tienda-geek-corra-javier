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


const UserProfileScreen = () => {
    const { user } = useAuthContext();

    /*
    if (user === null) {
        return (<Navigate to={AppRoute.Login} />)
    }
    */

    return (
        <section className='user-profile-screen'>
            <h2>Mi cuenta</h2>

            <div className='user-profile'>
                <p className='user-profile__name'>{user.email}</p>

                {
                    (!user.emailVerified) && <p className='my-3  text-danger'>E-mail sin verificar.</p>
                }

            </div>

            <OrderListContainer />
        </section>
    );
};


export {
    UserProfileScreen
}
