import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const MenuBar = () => {
  return (
    <div id="navbar" className="shadow sticky-top ">
       <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container>
  <Navbar.Brand href="#home">SRA Builders</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/project1">Action</NavDropdown.Item>
        <NavDropdown.Item href="/project2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="/project3">Something</NavDropdown.Item>        
      </NavDropdown>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link eventKey={2} href="/contact-us">
        Contact US
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default MenuBar