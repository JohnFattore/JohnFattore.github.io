import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="Allocation">Allocation</Nav.Link>
            <Nav.Link href="Transaction">Transaction</Nav.Link>
            <Nav.Link href="WatchList">Watch List</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Register">Register</Nav.Link>
            <Nav.Link href="Philosophy">Philosophy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavigation;