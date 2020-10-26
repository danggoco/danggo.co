import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigationbar = () => {
  return (
    // <Navbar expand="lg" className="fixed-top">
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo_text.png"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
