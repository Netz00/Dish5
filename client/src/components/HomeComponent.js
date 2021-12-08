import React from "react";
import { Jumbotron } from "reactstrap";

function Naslovna() {
  return (
    <>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restoran dish5</h1>
              <p>
                {" "}
                Neki super motivirajući marketinski tekst o dugogodisnjem
                iskustvu i kulinarskom umijecu. Rezervirajte danas!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Naslovna;
