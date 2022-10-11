/**
 * NavBar component.
 *
 * @author Javier Alejandro Corra
 */

import './NavBar.scss';
import logoTiendaGeek from '../../../../assets/images/logo-tienda-geek.svg';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
//import { BsSearch } from 'react-icons/bs';
import { CartWidget } from '../CartWidget/CartWidget';
import { AppRoute } from '../../../../utils/constants/AppRoute';
import { useAuthContext } from '../../../../contexts/AuthContext';


/*
    <Nav.Item>
        <Button variant='outline-dark'>
            <BsSearch />
            <span className='visually-hidden'>Buscar</span>
        </Button>
    </Nav.Item>
*/

const NavBar = () => {
    const { user, logout } = useAuthContext();

    const navigate = useNavigate();

    const handleLogout = async (e) => {
        console.log('logout');

        try {
            await logout();

            navigate(AppRoute.Home);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Navbar collapseOnSelect expand='lg' className='main-nav-bar'>
            <Container>
                <h1 className='visually-hidden'>Tienda Geek</h1>

                <Link to={AppRoute.Home} title='Tienda Geek' className='navbar-brand'>
                    <img src={logoTiendaGeek} className='logo-tienda' alt='Logo Tienda Geek' />
                </Link>

                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto me-3' as='ul'>
                        <Nav.Item as='li'>
                            <NavLink to={AppRoute.Category + '/comics'} className='nav-link'>
                                Comics
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as='li'>
                            <NavLink to={AppRoute.Category + '/manga'} className='nav-link'>
                                Manga
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as='li'>
                            <NavLink to={AppRoute.Category + '/figuras'} className='nav-link'>
                                {' '}
                                Figuras
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as='li'>
                            <NavLink to={AppRoute.Category + '/accesorios'} className='nav-link'>
                                Accesorios
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as='li'>
                            <NavLink to={AppRoute.Contact} className='nav-link'>
                                Contacto
                            </NavLink>
                        </Nav.Item>

                        {
                            (user) &&
                            <Nav.Item as='li'>
                                <NavLink to={AppRoute.AdminPanel} className='nav-link'>
                                    <strong>ADMIN PANEL</strong>
                                </NavLink>
                            </Nav.Item>
                        }

                        <NavDropdown title='Mi Cuenta' menuVariant='light' as='li' id='nav-dropdown-my-account'>
                            {
                                (user)
                                    ?
                                    <>
                                        <NavDropdown.Item as={Link} to={AppRoute.UserProfile}>
                                            Mi Cuenta
                                        </NavDropdown.Item>

                                        <NavDropdown.Item onClick={handleLogout}>
                                            Salir
                                        </NavDropdown.Item>
                                    </>
                                    :
                                    <>
                                        <NavDropdown.Item as={Link} to={AppRoute.Registration}>
                                            Crear Cuenta
                                        </NavDropdown.Item>

                                        <NavDropdown.Item as={Link} to={AppRoute.Login}>
                                            Iniciar sesión
                                        </NavDropdown.Item>
                                    </>
                            }
                        </NavDropdown>

                        <Nav.Item>
                            <CartWidget />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export { NavBar };
