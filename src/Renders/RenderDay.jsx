import React from "react";
import generateNumbers from "../generateNumbers";

const RenderDay = ({ dayOfWeek }) => {
  const hours = generateNumbers(1, 24).map((hour) => {
    return <div key={hour} className="row-hour" data-hour={hour}></div>;
  });
  return (
    <div className="day-by-hours" data-date-of-day={dayOfWeek}>
      {hours}
    </div>
  );
};

export default RenderDay;
