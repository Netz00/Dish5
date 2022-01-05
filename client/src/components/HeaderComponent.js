import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import SignUp from './Auth/Auth';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar light expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="me-auto" href="/">
              <img
                src="https://i.ibb.co/C2YTpgm/logo.png"
                height="25"
                width="auto"
                alt="dish5"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: '#2e3e4d' }}
                    to="/home"
                  >
                    Početna
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: '#2e3e4d' }}
                    to="/menu"
                  >
                    Meni
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: '#2e3e4d' }}
                    to="/reserve"
                  >
                    Rezervacije
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: '#2e3e4d' }}
                    to="/photo"
                  >
                    Fotogalerija
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: '#2e3e4d' }}
                    to="/contactus"
                  >
                    Kontakt
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button size="sm" outline onClick={this.toggleModal}>
                    Prijava
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <SignUp isModalOpen={this.state.isModalOpen} setIsModalOpen={this.toggleModal} />
      </>
    );
  }
}

export default Header;
