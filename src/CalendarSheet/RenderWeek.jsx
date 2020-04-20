import React from "react";
import RenderDay from "./RenderDay";
import generateWeek from "../generateWeek";

const RenderWeek = ({ date, events, onDeleteModalOpen, onСellModalOpen }) => {
  const week = generateWeek(date);
  const weekList = week.map((day) => {
    const eventForThisDay = events.filter((event) => {
      return day === new Date(event.eventDate).getTime();
    });
    return (
      <RenderDay
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

export default RenderWeek;
