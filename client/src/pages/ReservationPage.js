import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, Row } from 'reactstrap';

import ReservationComponent from '../components/ReservationComponent';

const Reservation = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const loggedIn = user?.result?.username;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    alert('Uspješno ste rezervirali svoje mjesto!!');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Rezervacije</h3>
          <hr />
        </div>
      </div>
      {!loggedIn && (
        <div className="row row-content">
          <div className="col-12">
            <h3>Rezervirajte svoje mjesto odmah</h3>
          </div>
          <div className="col-12 col-md-9">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="form-group">
                <Col className="md-3">
                  <label className="firstName">Ime</label>
                </Col>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ime"
                  {...register('Ime', { required: true, maxLength: 64 })}
                />
              </Row>
              <Row className="form-group">
                <Col className="md-3">
                  <label className="lastName">Prezime</label>
                </Col>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Prezime"
                  {...register('Prezime', { required: true, maxLength: 64 })}
                />
              </Row>
              <Row className="form-group">
                <Col className="md-3">
                  <label className="contact">Kontakt broj</label>
                </Col>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Kontakt broj"
                  {...register('Kontakt broj', {
                    required: true,
                    maxLength: 12,
                  })}
                />
              </Row>
              <Row className="form-group">
                <Col className="md-3">
                  <label className="email">Email</label>
                </Col>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Row>
              <Row className="form-group">
                <Col className="md-3">
                  <label className="peopleNumber">Broj osoba</label>
                </Col>
                <select
                  className="form-control"
                  {...register('Broj osoba', { required: true })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </Row>
              <Row className="form-group">
                <Col className="md-3">
                  <label className="dateTime">Datum i vrijeme dolaska</label>
                </Col>
                <input
                  className="form-control"
                  type="datetime-local"
                  placeholder="Datum i vrijeme dolaska"
                  {...register('Datum i vrijeme dolaska', { required: true })}
                />
              </Row>
              <Row className="form-group">
                <Col className="md-3 offset-9">
                  <Button type="submit" color="light">
                    Rezerviraj
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      )}
      {loggedIn && <ReservationComponent />}
    </div>
  );
};

export default Reservation;
