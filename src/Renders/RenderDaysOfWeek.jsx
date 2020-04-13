import React from "react";
import { PureComponent } from "react";

class RenderDaysOfWeek extends PureComponent {
  render() {
    const daysOfWeek = ["Mon", "Thu", "Wen", "Tue", "Fri", "Sat", "Sun"];
    const daysOfWeekList = daysOfWeek.map((day) => {
      return (
        <span key={day} className="navigation__days">
          {day}
        </span>
      );
    });
    return <div className="week">{daysOfWeekList}</div>;
  }
}

export default RenderDaysOfWeek;
