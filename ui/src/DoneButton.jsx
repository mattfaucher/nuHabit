import React from "react";
import { Button } from "react-bootstrap";
import graphQLFetch from "./graphQLFetch";

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
      count: props.count,
      currentDate: Date.now(),
      _id: props._id,
      email: props.email,
      increments: props.increments,
      difference: 0,
    };

    this.completedTask = this.completedTask.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  completedTask(e) {
    e.preventDefault();
    if (this.state.increments === "Daily") {
      this.setState({
        done: true,
        count: this.state.count + 1,
        difference: 86400,
      });

      this.updateCount();

      setTimeout(() => {
        this.setState({
          done: false,
        });
      }, this.state.difference);
    }

    if (this.state.increments === "Weekly") {
      this.setState({
        done: true,
        count: this.state.count + 1,
        difference: 86400 * 7,
      });
      this.updateCount();

      setTimeout(() => {
        this.setState({
          done: false,
        });
      }, this.state.difference);
    }
  }

  async updateCount() {
    const mutation = `mutation($email: String!, $_id: ID!, $habit: HabitCountInput!) {
        updateCount(email:$email, _id:$_id, habit:$habit) {
            _id
          count
          increments
        }
      }`;

    const vars = {
      email: this.state.email,
      _id: this.state._id,
      habit: {
        count: this.state.count,
        increments: this.state.increments,
      },
    };

    const data = await graphQLFetch(mutation, vars);
    if (!data) throw Error();
    return data;
  }

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
