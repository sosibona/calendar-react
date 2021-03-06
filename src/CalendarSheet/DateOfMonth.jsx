import React from "react";
import moment from "moment";
import getMonday from "./getMonday";
import generateNumbers from "./generateNumbers";

const DateOfMonth = ({ date }) => {
  const oneDay = 86400000;
  const mondayDate = getMonday(date);
  const currentDateTimestamp = new Date(
    moment(mondayDate).format("L")
  ).getTime();

  const days = generateNumbers(0, 6).map((day) => {
    return currentDateTimestamp + day * oneDay;
  });

  const dateList = days.map((day) => {
    const today = new Date(moment(new Date()).format("L")).getTime();
    return (
      <span
        key={day}
        className={
          today === day
            ? "curent-date-of-week date-today"
            : "curent-date-of-week"
        }
      >
        {new Date(day).getDate()}
      </span>
    );
  });
  return <div className="date-of-month">{dateList}</div>;
};

export default DateOfMonth;
