import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Habit extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.title = props.title;
    this.increments = props.increments;
    this.count = props.count;
    this.isGood = props.isGood;
    this.isDone = props.isDone;
  }

  render() {
    //link to habit details
    const habitDetails = `/details/${this.id},${this.title},${this.count},${this.increments}`;
    return (
      <Container fluid="md">
        <Card border="dark" className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Row>
              <Col className="col-6 col-xs-2" align="center">
                <Link to={habitDetails}> {this.title}</Link>
              </Col>
              <Col>COMPLETED</Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
