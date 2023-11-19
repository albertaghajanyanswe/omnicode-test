import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { NavLink } from "react-bootstrap";

function NavBar() {
  return (
    <div className="nav-bar-root">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="/home" className="nav-bar-brand">Experts.ai</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <NavLink href="/how-it-works" className="nav-bar-link">How it works</NavLink>
              <Nav.Link href="/about-us" className="nav-bar-link">About us</Nav.Link>
              <Nav.Link href="/services" className="nav-bar-link">Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
