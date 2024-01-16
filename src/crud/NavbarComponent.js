import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Sistem Perpustakaan</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;