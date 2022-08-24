import './NavBar.scss';
import logoTiendaGeek from '../../assets/images/logo-tienda-geek.svg';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='main-nav-bar'>
            {/*variant='light' */}
            <Container>
                <Navbar.Brand href="./" title='Tienda Geek'>
                    <img src={logoTiendaGeek} className="logo-tienda" alt="Logo Tienda Geek" />
                    <span className='visually-hidden'>Tienda Geek</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-3" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#products">Productos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav.Item>
                        
                        <NavDropdown title="Mi Cuenta" menuVariant="light" as='li' id="nav-dropdown-my-account">
                            <NavDropdown.Item href="#/action-1">Crear Cuenta</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-2">Iniciar sesión</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Button variant="outline-dark">
                                <i class="bi bi-search"></i>
                                <span class="visually-hidden">Buscar</span>
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
    NavBar,
}