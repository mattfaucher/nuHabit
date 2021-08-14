import React from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import { badges, badgeArr } from "./badges";
import graphQLFetch from "./graphQLFetch";

export default class CollectionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      increments: props.increments,
      _id: props._id,
      email: props.email,
      index: props.index,
      badgeCount: [],
    };
  }

  async componentDidMount() {
    const query = `query($email:String!){
      earnedBadges(email:$email){
      earnedBadges
      }
    }`;

    const vars = { email: this.state.email };
    const user = await graphQLFetch(query, vars);
    this.setState({
      badgeCounts: user.earnedBadges,
    });
  }

  render() {
    const one = this.state.badgeCounts;
    console.log(one);
    return <div> hello</div>;
  }
}
