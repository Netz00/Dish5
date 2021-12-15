import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-sm-3">
            <h5>Radno vrijeme</h5>
            <address>
              Ponedjeljak-Subota: 11:00-23:00
              <br />
              Nedjelja: 12:00-22:00
              <br />
            </address>
          </div>
          <div className="col-7 col-sm-3">
            <h5>Lokacija</h5>
            <address>
              Šetalište Pape Ivana Pavla II<br />
              21000, Split
              <br />
            </address>
          </div>

          <div className="col-7 col-sm-3">
            <h5>Kontakt</h5>
            <address>
              <i className="fa fa-phone fa-lg"></i>: +385 1234 5678
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:restoran@dish5.com">restoran@dish5.com</a>
              <br />
            </address>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Restoran dish5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
