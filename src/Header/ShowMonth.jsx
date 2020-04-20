import React from "react";
import generateWeek from "../CalendarSheet/generateWeek";
import moment from "moment";

const ShowMonth = ({ date }) => {
  const week = generateWeek(date);
  const firstDayOfWeek = new Date(week[0]);
  const lastDayOfWeek = new Date(week[week.length - 1]);

  const monthForFirstDayOfWeek = moment(firstDayOfWeek).format("MMMM");
  const monthForLastDayOfWeek = moment(lastDayOfWeek).format("MMMM");
  const currentYearForFirstDayOfWeek = moment(firstDayOfWeek).format("YYYY");
  const currentYearForLastDayOfWeek = moment(lastDayOfWeek).format("YYYY");
  const currentYear =
    currentYearForFirstDayOfWeek === currentYearForLastDayOfWeek
      ? `${currentYearForFirstDayOfWeek}`
      : `${currentYearForFirstDayOfWeek} - ${currentYearForLastDayOfWeek}`;

  return (
    <span className="header__month">
      {monthForFirstDayOfWeek === monthForLastDayOfWeek
        ? `${monthForLastDayOfWeek} ${currentYear}`
        : `${monthForFirstDayOfWeek} - ${monthForLastDayOfWeek} ${currentYear}`}
    </span>
  );
};

export default ShowMonth;
