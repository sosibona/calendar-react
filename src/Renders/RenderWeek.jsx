import React from "react";
import RenderDay from "./RenderDay";
import generateWeek from "../generateWeek";

const RenderWeek = ({ date, onModalOpen, events, onDeleteModalOpen }) => {
  const week = generateWeek(date);
  const weekList = week.map((day) => {
    const eventForThisDay = events.filter((event) => {
      return day === new Date(event.eventDate).getTime();
    });
    return (
      <RenderDay
        key={day}
        dayOfWeek={day}
        onModalOpen={onModalOpen}
        day={day}
        event={eventForThisDay}
        onDeleteModalOpen={onDeleteModalOpen}
      />
    );
  });

  return <section className="current-week">{weekList}</section>;
};

export default RenderWeek;
