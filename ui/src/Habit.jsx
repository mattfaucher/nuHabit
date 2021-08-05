import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  ProgressBar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class Habit extends React.Component {
  constructor(props) {
    super(props);
    this._id = props._id;
    this.title = props.title;
    this.increments = props.increments;
    this.count = props.count;
    this.isGood = props.isGood;
    this.created = props.created;
    this.done = false;
    this.isDone = props.isDone;
    this.completedTask.bind(this);
    this.dayCount = 60;
    this.weekCount = 12;
    this.progress = 0;
    this.form = "";
  }

  completedTask(e) {
    // TODO code for disabling the button
  }

  // Render a single Habit card, with Title, coloring/progress bar
  // and input fields

  render() {
    const habitDetails = `/details/${this._id},${this.title},${this.count},${this.increments}`;

    if (this.increments === "Daily") {
      this.progress = 100 * (this.count / this.dayCount);
    }
    if (this.increments === "Weekly") {
      this.progress = 100 * (this.count / this.weekCount);
    }
    if (this.isGood == true) {
      this.form = "success";
    }
    if (this.isGood == false) {
      this.form = "warning";
    }

    return (
      <Container fluid="md">
        <Card border="dark" className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Row>
              <Col>
                <ProgressBar striped variant={this.form} now={this.progress} />
              </Col>
            </Row>
            <Row>
              <Col className="col-6 col-xs-2" align="left">
                <Link to={habitDetails}> {this.title}</Link>
              </Col>
              <Col className="col-6 col-xs-2" align="right">
                <Button
                  onClick={this.completedTask}
                  size="sm"
                  variant="primary"
                  // use variable here based on completion time interval
                  disabled={this.done}
                // change disabled to true when done
                >
                  Done
                </Button>{" "}
                <Button variant="secondary" size="sm">
                  <FontAwesomeIcon icon={faBars} />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
