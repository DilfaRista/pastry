import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../dist/css/navbar.css";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="HomeHampers">Hampers</Nav.Link>
            <Nav.Link href="KelebihanKami">Tentang</Nav.Link>
            <Nav.Link href="PenilaianPelanggan">Penilaian</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarComponent
