import React from "react";
import BadgeCard from "./BadgeCard.jsx";
import { Container, Card, Row } from "react-bootstrap";
import { badges, badgeArr, encouragement } from "./badges";

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

    const cardStyle = {
      marginBottom: "10px",
      boxShadow: "5px 5px 5px #888888",
      backgroundColor: "rgba(95,158,170, 0.4)",
    };

    const headerStyle = {
      color: "rgb(59, 74, 93)",
      textShadow: "2px 3px 3px #888888",
      fontSize: "5vw",
      fontWeight: "800",
      textAlign: "center",
      margin: "auto",
    };

    const textStyle = {
      color: "rgb(59, 74, 93)",
      textShadow: "2px 3px 3px #888888",
      fontSize: "4vw",
      textAlign: "center",
      fontWeight: "600",
      margin: "auto",
      paddingBottom: "1%",
    };

    return (
      <Container fluid>
        <Card style={cardStyle} border="secondary">
          <Card.Header style={headerStyle}>{this.state.title}</Card.Header>
          <Row className="row row-cols-2">
            <Card.Text style={textStyle}>
              {this.state.increments} Habit
            </Card.Text>
            <Card.Text style={textStyle}>Count: {this.state.count}</Card.Text>
          </Row>
        </Card>
        <div>
          {this.state.collection.map(
            (badge, index = this.state.collection.length) => (
              <BadgeCard
                key={index}
                index={this.state.collection.length - index}
                badge={this.state.collection[index]}
                increments={this.state.increments}
                count={this.state.counts[index]}
                sayings={this.state.sayings[index]}
              />
            )
          )}
        </div>
      </Container>
    );
  }
}
