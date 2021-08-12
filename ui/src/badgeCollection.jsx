import React from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";
import { badges, badgeArr } from "./badges";
import graphQLFetch from "./graphQLFetch";

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.count = props.count;
    this.increments = props.increments;
    this.collection = [];
    this.numberBadges = 0;
    this.email = props.email;
    this.state = {
      badgeCounts: []
    };
  }

  async componentDidMount() {
    const query = `query($email:String!){
      earnedBadges(email:$email){
      earnedBadges
      }
    }`;

    const vars = { email: this.email }
    const user = await graphQLFetch(query, vars)
    this.setState({
      badgeCounts: user.earnedBadges
    });
  }

  render() {
    const cardStyle = {
      display: "flex",
      flex: "1 1 auto",
    };

    const checkout = {
      position: "relative",
      left: "80px",
    };

    const one = this.state.badgeCounts;
    console.log(one);
    return (
      <div className=".container-fluid">
        <div class="card-group">
          <div className="row row-cols-1">
            <div className="col d-flex align-items-center">
              <div className="card w-60" style={cardStyle}>
                <div className="card-img-top d-flex align-items-center bg-light">
                  <div>
                    <Image
                      style={{ width: "18rem" }}
                      className="img-fluid"
                      src={badgeArr[0]}
                      alt="Earned Badge"
                      roundedCircle
                    />

                    <h5 class="card-title">Badge 1</h5>
                    <p className="card-text">You have earned this badge {one} times</p>

                  </div>
                </div>
              </div>
              <div className="card w-60" style={cardStyle}>
                <div className="card-img-top d-flex align-items-center bg-light">
                  <div>
                    <Image
                      style={{ width: "18rem" }}
                      className="img-fluid"
                      src={badgeArr[1]}
                      alt="Earned Badge"
                      roundedCircle
                    />

                    <h5 class="card-title">Badge 1</h5>
                    <p class="card-text">You have earned this badge X times</p>

                  </div>
                </div>
              </div>
              <div className="card w-60" style={cardStyle}>
                <div className="card-img-top d-flex align-items-center bg-light">
                  <div>
                    <Image
                      style={{ width: "18rem" }}
                      className="img-fluid"
                      src={badgeArr[2]}
                      alt="Earned Badge"
                      roundedCircle
                    />
                    <h5 class="card-title">Badge 3</h5>
                    <p class="card-text">You have earned this badge X times</p>
                  </div>
                </div>
              </div>
              <div className="card w-60" style={cardStyle}>
                <div className="card-img-top d-flex align-items-center bg-light">
                  <div>
                    <Image
                      style={{ width: "18rem" }}
                      className="img-fluid"
                      src={badgeArr[3]}
                      alt="Earned Badge"
                      roundedCircle
                    />
                    <h5 class="card-title">Badge 4</h5>
                    <p class="card-text">You have earned this badge X times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}