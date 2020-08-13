import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';

const nav = () => {
  return (
    <div className="navbar">
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/"><img src="/img/TerraLogo.png" width="100px" height="70px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
                    <Link href="/resources" passHref><Nav.Link>Resources</Nav.Link></Link>
                    <Link href="/donate" passHref><Nav.Link>Donate</Nav.Link></Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .navbar {
          background-color: #f8f7ed;
        }
      `}</style>
    </div>
  );
};

export default nav;
