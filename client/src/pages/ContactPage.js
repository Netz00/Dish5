import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Početna</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Kontakt</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h5>Kontakt</h5>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Adresa</h5>
            <div>
              Vukovarska 6
              <br />
              21000, Split
              <br />
              Croatia
            </div>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Radno vrijeme</h5>
            <div>
              Ponedjeljak-Subota: 11:00-23:00
              <br />
              Nedjelja: 12:00-22:00
              <br />
            </div>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Kontakt</h5>
            <div>
              <i className="fa fa-phone"></i>: +385 1234 5678
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:restoran@dish5.com">restoran@dish5.com</a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div>
            <h5>Pronađite nas na karti</h5>
            <br />
          </div>
          <div className="col-15 col-md-10">
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container"
              style={mapStyles}
            >
              <iframe
                title="mapa"
                src="https://maps.google.com/maps?q=Vukovarska%206,%20Split&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                style={mapStyles}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
