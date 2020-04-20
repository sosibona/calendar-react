import React, { Component } from "react";
import TimeTrack from "./TimeTrack";
import RenderWeek from "./RenderWeek";
import './calendarSheet.scss';

class CalendarSheet extends Component {
  render() {
    const { date, onDeleteModalOpen, events, onСellModalOpen } = this.props;
    return (
      <main className="days">
        <TimeTrack />
        <RenderWeek
          date={date}
          onСellModalOpen={onСellModalOpen}
          events={events}
          onDeleteModalOpen={onDeleteModalOpen}
        />
      </main>
    );
  }
}

export default CalendarSheet;