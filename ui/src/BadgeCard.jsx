//move html from habitdetails into here and have function to check count and render as many badges + cards as necessary
import React from "react";
import { Image } from "react-bootstrap";

export default class BadgeCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.badge);
    this.day = props.day;
    this.badge = props.badge;
    this.increments = props.increments;
  }

  render() {
    const cardStyle = {
      display: "flex",
      flex: "1 1 auto",
    };

    //console.log(this.badge);

    return (
      <div className=".container-fluid">
        <div className="col d-flex align-items-center">
          <div className="card w-50" style={cardStyle}>
            <div className="card-img-top d-flex align-items-center bg-light">
              <div>
                <Image
                  style={{ width: "18rem" }}
                  className="img-fluid"
                  src={this.badge}
                  alt="Earned Badge"
                  roundedCircle
                />
              </div>
              <p className="col p-2 m-0"> {this.increments}: </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
