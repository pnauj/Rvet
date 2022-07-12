import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";  

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">RollingVet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-1 color-nav">
              <Nav.Link href="#home">Contactanos</Nav.Link>
              <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
              <Link className="nav-link" to="/pacientes/tabla">Pacientes</Link>
              <Link className="nav-link" to="/turnos/tabla">Turnos</Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
