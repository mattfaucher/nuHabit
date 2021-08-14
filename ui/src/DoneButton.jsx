import React from "react";
import { Button } from "react-bootstrap";
import graphQLFetch from "./graphQLFetch";
import { badges } from "./badges";

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.dayMilliseconds = 86400000;
    this.weekMilliseconds = this.dayMilliseconds * 7;
    // determine if done button should be enabled
    let isDone = this.chooseTime(props.increments, props._id);
    this.state = {
      done: isDone,
      count: props.count,
      currentDate: Date.now(),
      _id: props._id,
      email: props.email,
      increments: props.increments,
      index: props.index,
    };
    this.handleDone = this.handleDone.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.chooseTime = this.chooseTime.bind(this);
  }

  // Function to choose which calculation for done
  chooseTime(increments, _id) {
    if (localStorage.getItem(_id) === null) return false;
    if (increments === "Daily") {
      const old = parseInt(localStorage.getItem(_id), 10);
      if (old + this.dayMilliseconds < Date.now()) {
        return false;
      } else {
        return true;
      }
    }
    if (increments === "Weekly") {
      const old = parseInt(localStorage.getItem(_id), 10);
      if (old + this.weekMilliseconds < Date.now()) {
        return false;
      } else {
        return true;
      }
    }
  }

  handleDone() {
    // when clicked set new time to save
    localStorage.setItem(this.state._id, this.state.currentDate);
    this.setState({
      done: true,
      index: this.updateIndex(),
    });
    console.log(this.state.index);
    this.updateCount();
  }

  async updateCount() {
    const mutation = `mutation($email: String!, $_id: ID!, $habit: HabitCountInput!) {
        updateCount(email:$email, _id:$_id, habit:$habit) {
          count
          increments
          index
        }
      }`;

    const vars = {
      email: this.state.email,
      _id: this.state._id,
      habit: {
        count: this.state.count + 1,
        increments: this.state.increments,
        index: this.state.index,
      },
    };

    const data = await graphQLFetch(mutation, vars);
    if (!data) throw Error();

    return data;
  }

  render() {
    return (
      <Button
        onClick={this.handleDone}
        size="sm"
        variant="primary"
        // use variable here based on completion time interval
        disabled={this.state.done}
        // change disabled to true when done
      >
        Done
      </Button>
    );
  }
}
