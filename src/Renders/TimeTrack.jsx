import React from "react";

const renderArray = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i++) {
    newList.push(i);
  }
  return newList;
};

const TimeTrack = () => {
  const hoursByDay = renderArray(1, 24);
  console.log(hoursByDay);
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
};

export default TimeTrack;
