/**
 * NavBar component.
 *
 * @author Javier Alejandro Corra
 */

import './NavBar.scss';
import logoTiendaGeek from '../../../assets/images/logo-tienda-geek.svg';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='main-nav-bar'>
            <Container>
                <h1 className='visually-hidden'>Tienda Geek</h1>

                <Link to='/' title='Tienda Geek' className='navbar-brand'>
                    <img src={logoTiendaGeek} className="logo-tienda" alt="Logo Tienda Geek" />
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-3" as="ul">
                        <Nav.Item as="li">
                            <NavLink to='/category/comics' className='nav-link'>Comics</NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink to='/category/manga' className='nav-link'>Manga</NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink to='/category/figuras' className='nav-link'> Figuras</NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink to='/category/accesorios' className='nav-link'>Accesorios</NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink to='/contact' className='nav-link'>Contacto</NavLink>
                        </Nav.Item>

                        <NavDropdown title="Mi Cuenta" menuVariant="light" as='li' id="nav-dropdown-my-account">
                            <NavDropdown.Item href="#/action-1">Crear Cuenta</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-2">Iniciar sesión</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Button variant="outline-dark">
                                <i className="bi bi-search"></i>
                                <span className="visually-hidden">Buscar</span>
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


export {
    NavBar
}
