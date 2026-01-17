import React, { useState } from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand='lg'
      expanded={expanded}
      fixed='top'
      className='custom-navbar'
    >
      <Container>
        <Navbar.Brand>
          <Link to='/' className='brand' onClick={closeMenu}>
            <FontAwesomeIcon icon={faCompass} className='me-2' />
            Travel with Mohsin
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />

        <Navbar.Collapse>
          <Nav className='mx-auto gap-3'>
            <NavLink to='/' className='nav-item' onClick={closeMenu}>Home</NavLink>
            <NavLink to='/destinations' className='nav-item' onClick={closeMenu}>Destinations</NavLink>
            <NavLink to='/city-breaks' className='nav-item' onClick={closeMenu}>City Breaks</NavLink>
            <NavLink to='/holidays' className='nav-item' onClick={closeMenu}>Deals</NavLink>
          </Nav>

          <div className='d-flex gap-2'>
            <Button variant='outline-light' size='sm' onClick={closeMenu}>
              Sign in
            </Button>
            <Button variant='success' size='sm' onClick={closeMenu}>
              Get started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
