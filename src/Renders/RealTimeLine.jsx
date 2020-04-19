import React from "react";
import { Component } from "react";

class RealTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourTime: new Date().getHours(),
      minutesTime: new Date().getMinutes(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        hourTime: new Date().getHours(),
        minutesTime: new Date().getMinutes(),
      });
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { hourTime, minutesTime} = this.state;
    const style = `${60 * hourTime + minutesTime}px`;
    return (
      <span className="line-now" style={{ top: style }}>
        <span className="line-now__time">
          {String(hourTime).padStart(2, '0')}:{String(minutesTime).padStart(2, '0')}
        </span>
      </span>
    );
  }
}

export default RealTimeLine;
