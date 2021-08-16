//move html from habitdetails into here and have function to check count and render as many badges + cards as necessary
import React from "react";
import { Container, Image, Card, Row } from "react-bootstrap";

export default class BadgeCard extends React.Component {
  constructor(props) {
    super(props);
    this.badge = props.badge;
    this.increments = props.increments;
    this.count = props.count;
    this.encouragement = props.sayings;
    this.index = props.index;
  }

  render() {
    const cardStyle = {
      marginBottom: '10px',
      boxShadow: '5px 5px 5px #888888',
    };

    const headerStyle = {
      color: 'rgb(59, 74, 93)',
      fontSize: '4vw',
      fontWeight: '800',
      textAlign: 'center',
      margin: 'auto',
    };
    
    const badgeStyle = {
      display: 'block',
      maxWidth: '150px',
      maxHeight: '150px',
      width: 'auto',
      height: 'auto',
      margin: '0px auto 0px auto',
    };
    
    const footerStyle = {
      color: 'rgb(59, 74, 93)',
      fontSize: '3vw',
      fontWeight: '500',
      textAlign: 'center',
      margin: 'auto',
    };

    return (
      <Container fluid>
        <Card style={cardStyle} border='secondary'>
          <Card.Header style={headerStyle}>Checkpoint {this.index}</Card.Header> 
          <Card.Body>
            <Card.Img style={badgeStyle} src={this.badge}></Card.Img>
            <Card.Footer style={footerStyle}>{this.encouragement}</Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
