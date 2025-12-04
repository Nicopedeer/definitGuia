import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <Navbar expand="sm" fixed="top"  style={{backgroundColor: '#5b6143'}} data-bs-theme="light">
        <Container>
            <Navbar.Brand style={{color:'antiquewhite'}} href="/">DefinitGuia</Navbar.Brand>
            <Navbar.Toggle style={{color:'antiquewhite'}} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse style={{color:'antiquewhite'}} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link style={{color:'antiquewhite', textDecoration: 'none', marginLeft: '10px'}} to="/buys">Servicios</Link>
              <Link style={{color:'antiquewhite', textDecoration: 'none', marginLeft: '10px'}} to="/visits">Lugares para visitar</Link>
              <Link style={{color:'antiquewhite', textDecoration: 'none', marginLeft: '10px'}} to="/food">Gastronomia</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

