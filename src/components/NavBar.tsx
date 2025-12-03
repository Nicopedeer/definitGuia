import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
  return (
    <Navbar expand="sm" fixed="top"  style={{backgroundColor: '#5b6143'}} data-bs-theme="light">
        <Container>
            <Navbar.Brand style={{color:'antiquewhite'}} href="/">DefinitGuia</Navbar.Brand>
            <Navbar.Toggle style={{color:'antiquewhite'}} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse style={{color:'antiquewhite'}} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:'antiquewhite'}} href="/buys">Servicios</Nav.Link>
              <Nav.Link style={{color:'antiquewhite'}} href="/visits">Lugares para visitar</Nav.Link>
              <Nav.Link style={{color:'antiquewhite'}} href="/food">Gastronomia</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

