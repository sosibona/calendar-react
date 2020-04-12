import React from "react";

const renderArray = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i++) {
    newList.push(i);
  }
  return newList;
};

const RenderDay = ({ dayOfWeek }) => {
  const hours = renderArray(1,24).map(hour => {
    return (
      <div key={hour} className="row-hour" data-hour={hour}></div>
    )
  })
  return (
    <div className="day-by-hours" data-date-of-day={dayOfWeek}>
      {hours}
    </div>
  );
};

export default RenderDay;
