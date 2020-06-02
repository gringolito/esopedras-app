import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./NavigationBar.css"

function NavigationBar() {
  return (
    <Navbar className="navigation-clean">
      <Navbar.Brand href="sales" className="navbar-brand">Esopedras</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" className="navbar-toogler">
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-collapse" className="navigation-clean form-inline">
        <Nav className="ml-auto">
          <Nav.Link href="sales">Cadastro de Vendas</Nav.Link>
          <Nav.Link href="reports">Relatório de Pagamentos</Nav.Link>
          <NavDropdown title="Configurações" id="basic-nav-dropdown">
            <NavDropdown.Item href="#setup/action">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#setup/other">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;