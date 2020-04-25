import React from "react";
import getDisplayedMonth from "./getDisplayedMonth";

const ShowMonth = ({ date }) => {
  const {
    monthForFirstDayOfWeek,
    monthForLastDayOfWeek,
    currentYear,
  } = getDisplayedMonth(date);

  return (
    <span className="header__month">
      {monthForFirstDayOfWeek === monthForLastDayOfWeek
        ? `${monthForLastDayOfWeek} ${currentYear}`
        : `${monthForFirstDayOfWeek} - ${monthForLastDayOfWeek} ${currentYear}`}
    </span>
  );
};

export default ShowMonth;
