import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  ProgressBar,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DoneButton from "./DoneButton.jsx";

import graphQLFetch from "./graphQLFetch";

export default class Habit extends React.Component {
  constructor(props) {
    super(props);
    // set the state for all properties
    this.state = {
      _id: props._id,
      title: props.title,
      increments: props.increments,
      isDaily: props.increments === "Daily",
      count: props.count,
      isGood: props.isGood,
      created: props.created,
      done: false, //boolean for incremental completion of a habit
      isDone: false, //boolean for total completion of a habit
      progress: 0,
      form: "",
      showModal: false,
      email: props.email,
    };
    this.dayCount = 60;
    this.weekCount = 12;
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getInputTitle = this.getInputTitle.bind(this);
  }

  handleShow() {
    this.setState({
      showModal: true,
    });
  }

  handleClose() {
    this.setState({
      showModal: false,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    // don't allow bad input
    if (this.state.title.length < 3) {
      this.setState({
        showModal: false,
      });
      return;
    }

    // Mutation for updating a specific habit for a user
    const mutation = `mutation($email: String!, $_id: ID!, $habit: HabitUpdateInputs!) {
      updateHabit(email:$email, _id:$_id, habit:$habit) {
        _id
        title
        increments
        isGood
        count
      }
    }`;

    // if user changes increments, reset their count to 0
    if (this.state.isDaily !== this.prevDaily) {
      this.state.count = 0;
    }

    const vars = {
      email: this.state.email,
      _id: this.state._id,
      habit: {
        title: this.state.updateTitle
          ? this.state.updateTitle
          : this.state.title,
        isGood: this.state.isGood,
        increments: this.state.isDaily ? "Daily" : "Weekly",
        count: this.state.count,
      },
    };
    const data = await graphQLFetch(mutation, vars);
    // throw error if necessary
    if (!data) throw Error();
    this.setState({
      showModal: false,
    });
    // force reload to refresh new habits
    window.location.reload();
  }

  async handleDelete(e) {
    // mutation to delete habit
    const mutation = `mutation ($email: String!, $_id: ID!){
      deleteHabit(email: $email, _id: $_id){
        _id
        title
        increments
        isGood
        isDone
        created
        count
      }
    }`;
    const vars = {
      email: this.state.email,
      _id: this.state._id,
    };
    const data = await graphQLFetch(mutation, vars);
    // throw error if no data
    if (!data) throw Error();
    // hide modal
    this.setState({
      showModal: false,
    });
    // refresh
    window.location.reload();
  }

  getInputTitle(e) {
    this.setState({
      updateTitle: e.target.value,
    });
  }

  // Render a single Habit card, with Title, coloring/progress bar
  // and input fields

  render() {
    const habitDetails = `/details/${this._id},${this.state.title},${this.state.count},${this.state.increments}`;

    if (this.state.increments === "Daily") {
      this.state.progress = 100 * (this.state.count / this.dayCount);
    }
    if (this.state.increments === "Weekly") {
      this.state.progress = 100 * (this.state.count / this.weekCount);
    }
    if (this.state.isGood == true) {
      this.state.form = "success";
    }
    if (this.state.isGood == false) {
      this.state.form = "warning";
    }

    const inputCenter = {
      justifyContent: "center",
      marginTop: "20px",
    };

    return (
      <Container fluid="md">
        <Card border="dark" className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Row>
              <Col>
                <ProgressBar
                  striped
                  variant={this.state.form}
                  now={this.state.progress}
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6 col-xs-2" align="left">
                <Link to={habitDetails}> {this.state.title}</Link>
              </Col>
              <Col className="col-6 col-xs-2" align="right">
                <DoneButton
                  created={this.state.created}
                  count={this.state.count}
                  done={this.state.done}
                  _id={this.state._id}
                  title={this.state.title}
                  isDone={this.state.isDone}
                  isGood={this.state.isGood}
                  email={this.state.email}
                  increments={this.state.increments}
                />
                {" "}
                <Button variant="secondary" size="sm" onClick={this.handleShow}>
                  <FontAwesomeIcon icon={faBars} />
                </Button>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                  <Modal.Header className="mx-auto">
                    <Modal.Title>Edit your habit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <InputGroup style={inputCenter}>
                      <InputGroup.Text id="title-input">Title</InputGroup.Text>
                      <FormControl
                        defaultValue={this.state.title}
                        aria-label="Update your habit"
                        aria-describedby="title-input"
                        onChange={this.getInputTitle}
                      />
                    </InputGroup>
                    <InputGroup style={inputCenter}>
                      <InputGroup.Text>Form</InputGroup.Text>
                      <InputGroup.Radio
                        aria-label="Form a habit"
                        checked={true === this.state.isGood}
                        onChange={(e) => {
                          this.setState({ isGood: true });
                        }}
                      />
                      <InputGroup.Text>Break</InputGroup.Text>
                      <InputGroup.Radio
                        aria-label="Break a habit"
                        checked={false === this.state.isGood}
                        onChange={(e) => {
                          this.setState({ isGood: false });
                        }}
                      />
                    </InputGroup>
                    <InputGroup style={inputCenter}>
                      <InputGroup.Text>Daily</InputGroup.Text>
                      <InputGroup.Radio
                        aria-label="Increment Selection"
                        checked={true === this.state.isDaily}
                        onChange={(e) => {
                          this.setState({ isDaily: true });
                        }}
                      />
                      <InputGroup.Text>Weekly</InputGroup.Text>
                      <InputGroup.Radio
                        aria-label="Increment Selection"
                        checked={false === this.state.isDaily}
                        onChange={(e) => {
                          this.setState({ isDaily: false });
                        }}
                      />
                    </InputGroup>
                  </Modal.Body>
                  <Modal.Footer className="mx-auto">
                    <Row>
                      <Col>
                        <Button variant="danger" onClick={this.handleDelete}>
                          Delete
                        </Button>
                      </Col>
                      <Col>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Close
                        </Button>
                      </Col>
                      <Col>
                        <Button variant="primary" onClick={this.handleSubmit}>
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
