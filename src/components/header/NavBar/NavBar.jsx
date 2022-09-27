/**
 * NavBar component.
 *
 * @author Javier Alejandro Corra
 */

import './NavBar.scss';
import logoTiendaGeek from '../../../assets/images/logo-tienda-geek.svg';

import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { CartWidget } from '../CartWidget/CartWidget';
import { AppRoute } from '../../../utils/constants/AppRoute';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' className='main-nav-bar'>
            <Container>
                <h1 className='visually-hidden'>Tienda Geek</h1>

                <Link to={AppRoute.Root} title='Tienda Geek' className='navbar-brand'>
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

                        <NavDropdown title='Mi Cuenta' menuVariant='light' as='li' id='nav-dropdown-my-account'>
                            <NavDropdown.Item as={Link} to={AppRoute.Registration}>
                                Crear Cuenta
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={AppRoute.Login}>
                                Iniciar sesión
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Button variant='outline-dark'>
                                <BsSearch />
                                <span className='visually-hidden'>Buscar</span>
                            </Button>
                        </Nav.Item>

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
