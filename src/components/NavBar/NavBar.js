import './NavBar.scss';
import logoTiendaGeek from '../../assets/images/logo-tienda-geek.svg';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <header className='app-header'>
            {/*variant='light' */}
            <Navbar collapseOnSelect expand="lg">
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
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control type="search"
                                placeholder="Buscar" className="me-2" aria-label="Buscar"
                            />
                            
                            <Button variant="outline-dark">
                                <i class="bi bi-search"></i>
                                <span class="visually-hidden">Buscar</span>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );

};



export {
    NavBar,
}