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
    const cardStyle = {
      width: 'auto',
      height: 'auto',
      margin: '5px 5px 5px 5px',
      boxShadow: '5px 5px 5px 5px #888888',
      display: 'flex'
    };

    const headStyle = {
      textAlign: 'center',
      fontWeight: '800',
      textDecorationLine: 'underline',
    }

    const imgStyle = {
      width: "40%",
      height: "40%",
      marginLeft: 'auto',
      marginRight: 'auto'
    };

    const footerStyle = {
      textAlign: 'center',
      fontWeight: '600',
    };

    return (
      <Container fluid="xs">
        <Card style={cardStyle}>
          <Card.Header style={headStyle}>Badge {this.index + 1}</Card.Header>
          <Card.Img variant="top" src={badgeArr[this.index]} style={imgStyle}/>
          <Card.Footer style={footerStyle}>{`You have earned this badge ${this.badgeCount} times!`}</Card.Footer>
        </Card>
      </Container>
    );
  }
}