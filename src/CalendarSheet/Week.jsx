import React from "react";
import DayByHours from "./DayByHours";
import generateWeek from "./generateWeek";

const Week = ({ date, events, onDeleteModalOpen, onСellModalOpen }) => {
  const week = generateWeek(date);
  const weekList = week.map((day) => {
    const eventForThisDay = events.filter((event) => {
      return day === new Date(event.eventDate).getTime();
    });
    return (
      <DayByHours
        key={day}
        onСellModalOpen={onСellModalOpen}
        day={day}
        event={eventForThisDay}
        onDeleteModalOpen={onDeleteModalOpen}
      />
    );
  });

  return <section className="current-week">{weekList}</section>;
};

export default Week;
