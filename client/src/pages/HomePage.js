import React from "react";
import { Jumbotron } from "reactstrap";

function Naslovna() {
  return (
    <>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div>
              <img alt="logo" src="assets/images/logo_white.png"></img>
            </div>
            <div className="col-12 col-sm-22">
              <p>
                {" "}
                Restoran dish5 je mjesto za beskrajne užitke. <br></br>{" "}
                Napravite rezervaciju ili nam se obratite za <br></br>{" "}
                organizaciju događaja.
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Naslovna;
