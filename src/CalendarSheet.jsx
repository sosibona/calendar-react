import React from "react";
import TimeTrack from "./Renders/TimeTrack";
import RenderWeek from "./Renders/RenderWeek";

const CalendarSheet = () => {
  return (
    <main className="days">
      <TimeTrack />
      <RenderWeek />
    </main>
  );
};

export default CalendarSheet;
