import React, { PureComponent } from "react";
import TimeTrack from "./TimeTrack";
import Week from "./Week";
import './calendarSheet.scss';

class CalendarSheet extends PureComponent {
  render() {
    const { date, onDeleteModalOpen, events, onСellModalOpen } = this.props;
    return (
      <main className="days">
        <TimeTrack />
        <Week
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
