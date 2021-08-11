import React from "react";
import { ProgressBar } from "react-bootstrap";

export default class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      isGood: props.isGood,
      progress: 0,
      form: "",
      isDaily: props.isDaily,
    };
    this.dayCount = 60;
    this.weekCount = 12;
    this.progressBarCount = this.progressBarCount.bind(this);
    this.progressBarState = this.progressBarState.bind(this);
  }

  progressBarCount(e) {
    //e.preventDefault();
    if (this.state.isDaily) {
      this.setState({
        progress: 100 * (this.state.count / this.dayCount),
      });
    }

    if (!this.state.isDaily) {
      this.setState({
        progress: 100 * (this.state.count / this.weekCount),
      });
    }
  }
  progressBarState() {
    if (this.state.isGood == true) {
      this.setState({
        form: "success",
      });
    }
    if (this.state.isGood == false) {
      this.setState({
        form: "warning",
      });
    }
  }

  render() {
    console.log(this.state.progress);
    return (
      <ProgressBar
        striped
        variant={this.progressBarState}
        now={this.progressBarCount}
      />
    );
  }
}
