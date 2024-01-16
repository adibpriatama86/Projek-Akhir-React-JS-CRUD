import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import '../css/crudd.css'
import logo from '../img/logo.png'

const NavbarComponent = () => {
  return (
    <Navbar id='nav'>
      <Container>
      <Image  src={logo} alt='logo' className='logo-image' />
        <Navbar.Brand id='judulNav'>Sistem Perpustakaan</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent; 