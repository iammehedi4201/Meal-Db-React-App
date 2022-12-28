import React from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';


const Header = (props) => {

     const{ catchInputValue} = props

    return (
        <div>
              {['xl'].map((expand) => (
        <Navbar  key={expand} variant="dark" bg="dark" expand={expand} className="">
          <Container fluid>
            <Navbar.Brand href="#" className='text-white'>TheMealDB</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                       <NavLink
                        to="/"
                        style={({ isActive }) => ({ color: isActive ? "orange" : "white" })}
                         >
                        Home
                        </NavLink>
                   </Nav.Link>
                    <Nav.Link>
                       <NavLink
                        to="/Foods"
                        style={({ isActive }) => ({ color: isActive ? "orange" : "white" })}
                         >
                         Foods
                        </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                       <NavLink
                        to="/About"
                        style={({ isActive }) => ({ color: isActive ? "orange" : "white" })}
                         >
                          About Us
                        </NavLink>
                  </Nav.Link>
                        
                  <NavDropdown className='text-white mb-1'
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Enter your Meal"
                    className="me-2"
                    aria-label="Search"
                    id='input-field'
                  />
                  <Button onClick={ catchInputValue} variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
    );
};

export default Header;