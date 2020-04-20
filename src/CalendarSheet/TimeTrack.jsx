import React, { PureComponent } from "react";
import generateNumbers from "../generateNumbers";

class TimeTrack extends PureComponent {
  render() {
    const hoursByDay = generateNumbers(1, 24);
    const hoursList = hoursByDay.map((hour) => {
      return (
        <li className="time-in-day" key={hour}>
          {hour.toString().length === 1 ? `0${hour}:00` : `${hour}:00`}
        </li>
      );
    });
    return (
      <aside>
        <ul className="time">{hoursList}</ul>
      </aside>
    );
  }
}

export default TimeTrack;
