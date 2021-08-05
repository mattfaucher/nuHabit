import React from "react";
import { Container, Alert, Card, Row, Col, Spinner } from "react-bootstrap";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";
import CompletedHabit from "./CompletedHabit.jsx";

class AccomplisedHabits extends React.Component {
  async fetchData(email) {
    const vars = { email: email };
    const query = `query ($email: String!) {
				completedHabits(email: $email) {
					_id
					title
					isGood
					count
					increments
					isDone
					created
				}
			} `;

    const data = await graphQLFetch(query, vars);
    return data;
  }

  constructor() {
    super();
    this.state = {
      completed: [],
    };
  }

  async componentDidMount() {
    const data = await this.fetchData(this.props.auth0.user.email);
    const userData = await data;
    this.setState({
      completed: userData.completedHabits,
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const data = await this.fetchData(this.props.auth0.user.email);
      if (data.userHabits) {
        this.setState({
          completed: data.completedHabits,
        });
      }
    }
  }

  render() {
    const returnToHome = `/habits`;

    return (
      <div>
        <Container fluid>
          {this.state.completedHabits ? (
            this.state.completedHabits.map((habit) => (
              <CompletedHabit
                key={habit.id}
                title={habit.title}
                count={habit.count}
                increments={habit.increments}
              />
            ))
          ) : (
            <div>
              <Card
                border="dark"
                className="shadow-lg p-3 mb-5 bg-white rounded"
              >
                <Card.Body>
                  <Row>
                    <Col className="col-11 col-xs-2" align="center">
                      UhOh! You Have No Completed Habits
                    </Col>
                    <Col className="col-11 col-xs-2" align="center">
                      <Link to={returnToHome}>Click Here to Return Home</Link>
                    </Col>
                    <Col className="col-11 col-xs-2" align="center">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default withAuth0(
  withAuthenticationRequired(AccomplisedHabits, {
    onRedirecting: () => <Alert variant="info">Redirecting...</Alert>,
  })
);
