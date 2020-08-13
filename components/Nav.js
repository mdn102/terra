import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';

const nav = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/"> TERRA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
                    <NavDropdown title="Places" id="basic-nav-dropdown">
                      <Link href="/beach" passHref><NavDropdown.Item>Beach</NavDropdown.Item></Link>
                      <Link href="/city" passHref><NavDropdown.Item>City</NavDropdown.Item></Link>
                      <Link href="/desert" passHref><NavDropdown.Item>Desert</NavDropdown.Item></Link>
                      <Link href="/jungle" passHref><NavDropdown.Item>Jungle</NavDropdown.Item></Link>
                      <Link href="/ocean" passHref><NavDropdown.Item>Ocean</NavDropdown.Item></Link>
                      <Link href="/forest" passHref><NavDropdown.Item>Forest</NavDropdown.Item></Link>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">How to help</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default nav;
