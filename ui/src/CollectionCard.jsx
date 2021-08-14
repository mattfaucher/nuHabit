import React from "react";
import {
    Card,
    Container,
  } from "react-bootstrap";
import {badgeArr} from "./badges";

export default class CollectionCard extends React.Component {
	constructor(props) {
		super(props);
      this.badgeCount = props.badgesEarned;
      this.index = props.index;
	}

	render() {
    const imgStyle = {
      width: "100px",
      height: "100px"
    }
    return (
      <Container>
        <Card>
          <Card.Img variant="top" src={badgeArr[this.index]} style={imgStyle}/>
          <Card.Body>Badge {this.index+1}</Card.Body>
          <Card.Text>{`You have earned this badge ${this.badgeCount} times!`}</Card.Text>
        </Card>
      </Container>
    );
  }
}