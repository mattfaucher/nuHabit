import React from "react";
import { Button } from "react-bootstrap";

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
      count: props.count,
      currentDate: Date.now(),
    };
  }

  calculateTimeLeftDaily() {
    let countDownDate = this.state.currentDate / 60000 + 60 * 24;
    let now = this.state.currentDate / 60000;

    console.log(countDownDate);
    console.log(now);

    let difference = countDownDate - now;

    console.log(difference);

    return difference;
  }

  completedTask(e) {
    let time = this.calculateTimeLeftDaily();

    if (time > 0) {
      this.setState({
        done: true,
        count: this.state.count++,
      });

      const mutationTrue = `mutation ($email: String!, $habit: HabitInputs!) {
        insertHabit(email: $email, habit: $habit) {
            title
        }
    }`;
    } else {
      setTimeout(() => {
        this.setState({
          done: false,
        }),
          time;
      });
    }
  }

  render() {
    return (
      <Button
        onClick={this.completedTask.bind(this)}
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
