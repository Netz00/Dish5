import React, { Component } from "react";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

class ContactPage extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Kontakt</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Adresa</h5>
            <div>
              Šetalište Pape Ivana Pavla II
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
                src="https://maps.google.com/maps?q=%C5%A0etali%C5%A1te%20Pape%20Ivana%20Pavla%20II,%2021000,%20Split,%20Hrvatska&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
