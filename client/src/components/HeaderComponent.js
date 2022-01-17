import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionType from '../constants/actionTypes';

import SignUp from './Auth/Auth';

const Header = () => {
  const user_profile = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();

  const [isNavOpen, setNavOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const [user, setUser] = useState(user_profile?.result?.username);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const logout = () => {
    setUser(null);
    dispatch({ type: actionType.LOGOUT });

    history.push('/home');
  };

  return (
    <>
      <Navbar light expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="me-auto" href="/">
            <img
              src="https://i.ibb.co/C2YTpgm/logo.png"
              height="25"
              width="auto"
              alt="dish5"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
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
              {user && (
                <NavItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: '#2e3e4d' }}
                    to="/groceries"
                  >
                    Namirnice
                  </NavLink>
                </NavItem>
              )}
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button size="sm" outline onClick={toggleModal}>
                  {user ? 'Registracija zaposlenika' : 'Prijava'}
                </Button>
              </NavItem>
              <NavItem>
                {user && (
                  <Button size="sm" outline onClick={logout}>
                    Odjava
                  </Button>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <SignUp isModalOpen={isModalOpen} setIsModalOpen={toggleModal} />
    </>
  );
};

export default Header;
