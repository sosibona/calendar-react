import React, { Component } from "react";
import TimeTrack from "./TimeTrack";
import RenderWeek from "./RenderWeek";
import './calendarSheet.scss';

class CalendarSheet extends Component {
  // state = {
  //   events: [
  //     {
  //       id: "1",
  //       name: "Test",
  //       eventDate: "04-14-2020",
  //       eventTime: ["05:00", "05:30"],
  //       additionalInfo: "aaaaaaaa",
  //       eventColor: "#333aaa",
  //     },
  //     {
  //       id: "2",
  //       name: "Test2",
  //       eventDate: "04-14-2020",
  //       eventTime: ["05:30", "06:00"],
  //       additionalInfo: "aaaaaaaaaaa",
  //       eventColor: "#ef3ddd",
  //     },
  //     {
  //       id: "3",
  //       name: "Test2",
  //       eventDate: "04-15-2020",
  //       eventTime: ["05:45", "09:00"],
  //       additionalInfo: "dsadsdasds",
  //       eventColor: "#af62ad",
  //     },
  //     {
  //       id: "4",
  //       name: "Test2",
  //       eventDate: "04-16-2020",
  //       eventTime: ["05:00", "09:00"],
  //       additionalInfo: "asdasdasd",
  //       eventColor: "#aa3q1d",
  //     },
  //   ],
  // };
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

// const CalendarSheet = ({ date, onModalOpen }) => {
//   return (
//     <main className="days">
//       <TimeTrack />
//       <RenderWeek date={date} onModalOpen={onModalOpen} />
//     </main>
//   );
// };

export default CalendarSheet;
