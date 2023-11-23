import React from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';

function Nav2() {
  const handleFilter = () => {
   
  };

  const handleSortByRecommended = () => {
   
  };

  return (
    <div className='nav_sec'>
      <h2>All Activities</h2>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Price" id="price-dropdown">
            <NavDropdown.Item href="#action/3.1">Low to High</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">High to Low</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Language" id="language-dropdown">
            <NavDropdown.Item href="#action/3.3">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Spanish</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Duration" id="duration-dropdown">
            <NavDropdown.Item href="#action/3.5">Short</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Long</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Time" id="time-dropdown">
            <NavDropdown.Item href="#action/3.7">Morning</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.8">Afternoon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.9">Evening</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="primary" onClick={handleFilter}>Filter</Button>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Button variant="secondary" onClick={handleSortByRecommended}>Sort By: Recommended</Button>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Nav2;
