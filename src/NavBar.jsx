import './NavBarStyle.css'
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'


function MyNavBar() {
  let location = useLocation();
  console.log('location:', location.pathname)
  return (
      <>
    <Navbar className="">
      <Container>
        <Navbar.Collapse className="justify-content-start">
        <Navbar.Brand>
          <Link className="nav-link" to='/'>
          Libentia Libellulus</Link>
        </Navbar.Brand>

        <Navbar.Text className="nav-link me-2">
        <Link className="nav-link" to='/userprofile'>Profile</Link> 
        </Navbar.Text>
        
        <Navbar.Text className="nav-link me-2">
        <Link className="nav-link" to='/browsebooks'>Browse Books</Link> 
        </Navbar.Text>

      </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default MyNavBar