import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({ isModalOpen, setIsModalOpen }) => {
  const [form, setForm] = useState(initialState);

  const user = JSON.parse(localStorage.getItem('profile'));

  const loggedIn = user?.result?.username;

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const toggleModal = () => {
    setForm(initialState);
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loggedIn) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>
        {loggedIn ? 'Registracija novog zaposlenika' : 'Prijavi se'}
      </ModalHeader>
      <ModalBody>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {loggedIn && (
              <>
                <Input
                  name="firstName"
                  label="Ime"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Prezime"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Lozinka"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {loggedIn && (
              <Input
                name="confirmPassword"
                label="Ponovite lozinku"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {loggedIn ? 'Registriraj' : 'Prijava'}
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default SignUp;
