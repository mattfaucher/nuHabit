import React from "react";
import { Container, Alert, Card } from "react-bootstrap";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import graphQLFetch from "./graphQLFetch.js";

class BadgeCollectionList extends React.Component {
  async fetchData(email) {
    const vars = { email: email };
    const query = `query($email: String!) {
                    earnedBadges(email: $email){
                      earnedBadges
                    }
                } `;

    const data = await graphQLFetch(query, vars);
    return data;
  }

  constructor() {
    super();
    this.state = {
      collection: [],
    };
  }

  async componentDidMount() {
    const data = await this.fetchData(this.props.auth0.user.email);
    const userData = await data;
    this.setState({
      collection: userData.earnedBadges,
    });
    const { earnedBadges } = userData;
  }

  render() {
    console.log(this.state.collection);
    for (let i = 0; i < 9; i++) {
      return (
        <div>
          <Container fluid>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Badges Earned</Card.Title>
                <Card.Text>Text.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
      );
    }
  }
}

export default withAuth0(
  withAuthenticationRequired(BadgeCollectionList, {
    onRedirecting: () => <Alert variant="info">Redirecting...</Alert>,
  })
);
