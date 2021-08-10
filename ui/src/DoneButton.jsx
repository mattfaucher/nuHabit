import React from "react";
import { Button } from "react-bootstrap";
import graphQLFetch from "./graphQLFetch";

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      done: props.done,
      count: props.count,
      currentDate: Date.now(),
      _id: props._id,
      title: props.title,
      created: props.created,
      isGood: props.isGood,
      email: props.email,
      isDone: props.isDone,
      increments: props.increments,
    };

    this.completedTask = this.completedTask.bind(this);
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  /*  calculateTimeLeftDaily() {
    let countDownDate = this.state.currentDate / 60000 + 60 * 24;
    let now = this.state.currentDate / 60000;
    let dif = countDownDate - now;

    return dif;
  } */

  completedTask(e) {
    e.preventDefault();

    let countDownDate = this.state.currentDate / 60000 + 60 * 24;
    let now = this.state.currentDate / 60000;
    //let dif = countDownDate - now;

    let dif = 10000;
    this.setState({
      done: true,
      count: this.state.count + 1,
    });

    setTimeout(() => {
      this.setState({
        done: false,
      });
    }, dif);
  }

  /*  async updateCount() {
    const mutation = `mutation($email: String!, $_id: ID!, $habit: HabitUpdateInputs!) {
        updateHabit(email:$email, _id:$_id, habit:$habit) {
            _id
            title
            increments
            isGood
            count
        }
      }`;

    const vars = {
        _id: this.state.id,
        title: this.state.title,
        increments: this.state.increments,
        isGood: this.state.isGood,
      count: this.state.count,
    };

    const data = graphQLFetch(mutation, vars);
    if (!data) throw Error();
  } */
  render() {
    return (
      <Button
        onClick={this.completedTask}
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
