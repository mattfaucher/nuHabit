import React from "react";
import Collection from "./BadgeCollectionCard.jsx";
import { Container, Alert } from "react-bootstrap";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import graphQLFetch from "./graphQLFetch.js";

class BadgeCollection extends React.Component {
  async fetchData(email) {
    const vars = { email: email };
    const query = `query ($email: String!) {
                    userHabits(email: $email) {
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
      collection: [],
      habitList: [],
    };
  }

  async componentDidMount() {
    const data = await this.fetchData(this.props.auth0.user.email);
    const userData = await data;
    this.setState({
      habitList: userData.userHabits,
    });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Collection />
        </Container>
      </div>
    );
  }
}

export default withAuth0(
  withAuthenticationRequired(BadgeCollection, {
    onRedirecting: () => <Alert variant="info">Redirecting...</Alert>,
  })
);
