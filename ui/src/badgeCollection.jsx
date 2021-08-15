import React from "react";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Container, Alert, Row, Col } from "react-bootstrap";

import CollectionCard from "./CollectionCard.jsx";
import graphQLFetch from "./graphQLFetch.js";

class BadgeCollection extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

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

  componentDidMount() {
    this.setState({
      collection: undefined
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.collection === undefined) {
      const data = await this.fetchData(this.props.auth0.user.email);
      const userData = await data;
      this.setState({
        collection: userData.earnedBadges.earnedBadges
      });
    }
  }

  render() {
    const headerStyle = {
      background: '-webkit-linear-gradient(rgb(59, 74, 93), white)',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent',
      fontWeight: '800',
      textAlign: 'center',
    };

    const colSpacing = {
      margin: '40px auto 20px auto',
    };

    return (
      <Container fluid="md">
        <h1 style={headerStyle}>Badge Collection</h1>
        {this.state.collection !== undefined ?
          (<Row className="row row-cols-md-3">
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[0]} index={0} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[1]} index={1} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[2]} index={2} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[3]} index={3} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[4]} index={4} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[5]} index={5} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[6]} index={6} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[7]} index={7} />
            </Col>
            <Col style={colSpacing}>
              <CollectionCard badgesEarned={this.state.collection[8]} index={8} />
            </Col>
          </Row>)
          : <div></div>}
      </Container>
    );
  }
}

export default withAuth0(
  withAuthenticationRequired(BadgeCollection, {
    onRedirecting: () => <Alert variant="info">Redirecting...</Alert>,
  })
);
