import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Habit extends React.Component {
  constructor(props) {
    super(props);
    this._id = props._id;
    this.title = props.title;
    this.increments = props.increments;
    this.count = props.count;
    this.isGood = props.isGood;
    this.isDone = props.isDone;
    this.dayCount = 60;
    this.weekCount = 12;
    this.color = this.isGood ? 'rgba(75, 181, 67, .7)' : 'rgba(255, 255, 161, .7)';
  }

  render() {
    const cardStyle = {
      boxShadow: '6px 6px 6px #888888',
      padding: '10px 10px 10px 10px',
      margin: '30px 0 30px 0',
      backgroundColor: this.color
    };

    const textStyle = {
      color: 'rgb(59, 74, 93)',
      fontSize: '4vh',
      fontWeight: '600',
      textAlign: 'center',
      textDecoration: 'none',
    };

    const habitDetails = `/details/${this._id},${this.title},${this.count},${this.increments}`;

    return (
      <Container fluid="md">
        <Card style={cardStyle} border="success">
          <Link style={{ textDecoration: 'none' }} to={habitDetails}>
            <Card.Body>
              <Row>
                <Card.Text style={textStyle}>{this.title}</Card.Text>
              </Row>
            </Card.Body>
          </Link>
        </Card>
      </Container>
    );
  }
}
