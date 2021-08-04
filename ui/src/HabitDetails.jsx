import React from "react";
import BadgeCard from "./BadgeCard.jsx";
import { badgeArray, badgeArr } from "./badges";
import { badges } from "./badges";

export default class HabitDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.title,
      count: this.props.match.params.count,
      increments: this.props.match.params.increments,
      collection: [],
    };
  }

  /* correctBadges() {
    for (let i = 0; i < this.state.count; i++) {
      if(badges.day[i] <= this.state.count) {
        badgeArray.forEach(function(value, j) {
          if(j === i){
            this.state.collection.push(value);
          } 
        })
             
      }
  }
}
 */
  render() {
    console.log(this.state.collection);

    for (let i = this.state.count; i >= 0; i--) {
      if (badges.day[i] <= this.state.count) {
        this.state.collection.push(badgeArr[i]);
      }
    }

    console.log(this.state.collection);

    return (
      <div className=".container-fluid">
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
            />
          ))}
        </div>
      </div>
    );
  }
}
