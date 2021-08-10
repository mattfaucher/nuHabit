import React from "react";
import {
    Card,
    Row,
    Col,
    Container,
    Image,
  } from "react-bootstrap";
import {badges, badgeArr} from "./badges";

export default class Collection extends React.Component {
	constructor(props) {
		super(props);
        this.count = props.count;
        this.increments = props.increments;
        this.collection = [];
        this.numberBadges = 0;
	}


	render() {
    for (let i = 0; i <= this.count; i++) {
      if (this.increments === "Daily") {
        if (badges.day[i] <= this.count) {
          this.collection.push(badgeArr[i])
          this.numberBadges++;
        }
      }
    }
    
    console.log(this.collection);
    console.log(this.numberBadges);
/*         for (let i = this.state.count; i >= 0; i--) {
            if (this.state.increments === "Daily") {
              if (badges.day[i] <= this.state.count) {
                this.state.collection.push(badgeArr[i]);
                this.state.counts.push(badges.day[i]);
                this.state.sayings.push(encouragement.daily[i]);
              }
            }
            if (this.state.increments === "Weekly") {
              if (badges.week[i] <= this.state.count) {
                this.state.collection.push(badgeArr[i]);
                this.state.counts.push(badges.week[i]);
                this.state.sayings.push(encouragement.weekly[i]);
              }
            }
          } */
          


        return (
            
            <Container fluid="md">
                <div className="row row-cols-9">
                <div className="col">
                  <Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[0]}
                  alt="Earned Badge"
                  roundedCircle/>
                </div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[1]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[2]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[3]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[4]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[5]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[6]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[7]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[8]}
                  alt="Earned Badge"
                  roundedCircle/></div>
                {/*if (this.collection.numberBadges >= 0) {
                <div className="col"><Image style={{ width: "18rem" }}
                  className="img-fluid"
                  src={badgeArr[0]}
                  alt="Earned Badge"
                  roundedCircle/></div>                 
                } */}
                </div>
            </Container>
            )
        }
}