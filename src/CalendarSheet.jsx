import React from "react";
import TimeTrack from "./Renders/TimeTrack";
import RenderWeek from "./Renders/RenderWeek";

const CalendarSheet = ({date, getMonday}) => {
  return (
    <main className="days">
      <TimeTrack />
      <RenderWeek date={date} getMonday={getMonday}/>
    </main>
  );
};

export default CalendarSheet;
