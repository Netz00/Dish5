import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

import { actions } from 'react-redux-form';
import { connect } from 'react-redux';

import Date from '../components/DatePickerComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
});

class ReservationPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Rezervacije</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Rezervirajte svoje mjesto odmah</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="firstName" md={3}>
                  Ime
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="Ime"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    class="text-danger"
                    model=".firstName"
                    show="touched"
                    messages={{
                      minLength: 'Mora biti dulje od 2 slova',
                      maxLength: 'Mora biti kraće od 15 slova',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={3}>
                  Prezime
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastname"
                    name="lastName"
                    placeholder="Prezime"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    class="text-danger"
                    model=".lastName"
                    show="touched"
                    messages={{
                      minLength: 'Mora biti dulje od 2 slova',
                      maxLength: 'Mora biti kraće od 15 slova',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={3}>
                  Kontakt broj
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Kontakt broj"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    class="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      minLength: 'Mora biti broj dulji od 2 znamenke',
                      maxLength: 'Mora biti broj kraći od 15 znamenki',
                      isNumber: 'Mora biti broj',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={3}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    class="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      validEmail: 'Nevažeća email adresa',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="personnum" md={3}>
                  Broj osoba
                </Label>
                <Col md={3}>
                  <Control.select
                    model="personnum"
                    name="personnum"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="date" md={3}>
                  Datum dolaska
                </Label>
                <Col md={3}>
                  <Date />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="time" md={3}>
                  Vrijeme dolaska
                </Label>
                <Col md={3}>
                  <Control.select
                    model="time"
                    name="time"
                    className="form-control"
                  >
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 8 }}>
                  <Button type="submit" color="light">
                    Rezerviraj
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapDispatchToProps)(ReservationPage);
