import React from "react";
import BadgeCard from "./BadgeCard.jsx";
import { Container, Spinner, Card, Row, Col } from "react-bootstrap";
import { badges, badgeArr, encouragement } from "./badges";
import { Link } from "react-router-dom";

export default class HabitDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.title,
      count: this.props.match.params.count,
      increments: this.props.match.params.increments,
      collection: [],
      sayings: [],
      counts: [],
    };
  }

  render() {
    for (let i = this.state.count; i >= 0; i--) {
      if (this.state.increments === "Daily") {
        if (badges.day[i] <= this.state.count) {
          this.state.collection.push(badgeArr[i]);
          this.state.counts.push(badges.day[i]);
          this.state.sayings.push(encouragement.daily[i]);
        }
      }
      if (this.state.increments === "Weekly") {
        if (badges.week[i] <= this.state.count) {
          this.state.collection.push(badgeArr[i]);
          this.state.counts.push(badges.week[i]);
          this.state.sayings.push(encouragement.weekly[i]);
        }
      }
    }

    return (
      <Container fluid>
        <div className="d-grid gap-3">
          <div className="card text-center" style={{ width: "100%" }}>
            <div className="card-body">
              {this.state.title}
              <p className="card-text">Count: {this.state.count}</p>
            </div>
          </div>
        </div>
        <div>
          {this.state.collection.map((badge, index) => (
            <BadgeCard
              key={index}
              badge={this.state.collection[index]}
              increments={this.state.increments}
              count={this.state.counts[index]}
              sayings={this.state.sayings[index]}
            />
          ))}
        </div>
      </Container>
    );
  }
}
