import React from "react";
import CollectionCard from "./CollectionCard.jsx";
import { Container, Alert, Card, Row, Col } from "react-bootstrap";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import graphQLFetch from "./graphQLFetch.js";

class BadgeCollection extends React.Component {
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
      //collection: undefined,
    }
  }

  

  componentDidMount() {
    this.setState( {
      collection: undefined
    }
    )
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.collection === undefined) {
      console.log("I want it to work")
      const data = await this.fetchData(this.props.auth0.user.email);
      const userData = await data;
      this.setState(
        {collection: userData.earnedBadges.earnedBadges}
      )
    console.log(this.state.collection)
    }
    else {console.log("it didn't work")}
    //const data = await this.fetchData(this.props.auth0.user.email);
    //const userData = await data;
    //const temp = userData.earnedBadges;
    //this.state.collection = temp.earnedBadges;
    //this.setState({
    //  collection: userData.earnedBadges.earnedBadges,
    //});
  }

  render() {
    return (
      <Container fluid>
      {this.state.collection !== undefined ?
        (<Row className="row-cols-3">
          <Col>
            <CollectionCard badgesEarned={this.state.collection[0]} index={0} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[1]} index={1} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[2]} index={2} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[3]} index={3} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[4]} index={4} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[5]} index={5} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[6]} index={6} />
          </Col>
          <Col>
            <CollectionCard badgesEarned={this.state.collection[7]} index={7} />
          </Col>
          <Col>
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
