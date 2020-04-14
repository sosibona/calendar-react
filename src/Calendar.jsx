import React, { Component } from "react";
import DeleteEvent from "./PopUp/DeleteEvent";
import AddEvent from "./PopUp/AddEvent";
import Header from "./Header/Header";
import CalendarSheet from "./CalendarSheet";
import moment from "moment";

class Calendar extends Component {
  state = {
    date: new Date(),
    isModalOpen: false,
    isDeleteOpen: false,
    name: "",
    eventDate: "2020-04-14",
    eventTime: [],
    additionalInfo: "",
    eventColor: "#47d6dc",
    eventForDelete: null,
    events: [
      {
        id: "1",
        name: "Test",
        eventDate: "04-14-2020",
        eventTime: ["05:00", "05:30"],
        additionalInfo: "aaaaaaaa",
        eventColor: "#333aaa",
      },
      {
        id: "2",
        name: "Test2",
        eventDate: "04-14-2020",
        eventTime: ["05:30", "06:00"],
        additionalInfo: "aaaaaaaaaaa",
        eventColor: "#ef3ddd",
      },
      {
        id: "3",
        name: "Test2",
        eventDate: "04-15-2020",
        eventTime: ["05:45", "09:00"],
        additionalInfo: "dsadsdasds",
        eventColor: "#af62ad",
      },
      {
        id: "4",
        name: "Test2",
        eventDate: "04-16-2020",
        eventTime: ["05:00", "09:00"],
        additionalInfo: "asdasdasd",
        eventColor: "#aa3q1d",
      },
    ],
  };

  nextWeek = () => {
    this.setState({
      date: new Date(this.state.date.setDate(this.state.date.getDate() + 7)),
    });
  };

  prevWeek = () => {
    this.setState({
      date: new Date(this.state.date.setDate(this.state.date.getDate() - 7)),
    });
  };

  onToday = () => {
    this.setState({
      date: new Date(),
    });
  };

  onModalOpen = (day, hour) => {
    const eventDate = moment(+day).format("YYYY-MM-DD");
    const eventStartTime = `${(hour - 1).toString().padStart(2, "0")}:00`;
    const eventFinishTime = `${hour.toString().padStart(2, "0")}:00`;
    this.setState({
      isModalOpen: true,
      eventDate,
      eventTime: [eventStartTime, eventFinishTime],
    });
  };

  onDeleteModalOpen = (event, meet) => {
    event.stopPropagation();
    this.setState({
      isDeleteOpen: true,
      eventForDelete: meet,
    });
  };

  onModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "startEvent") {
      const start = value;
      this.state.eventTime.splice(0, 1, start);
      this.setState({
        eventTime: this.state.eventTime,
      });
    } else {
      const finish = value;
      this.state.eventTime.splice(1, 1, finish);
      this.setState({
        eventTime: this.state.eventTime,
      });
    }
    this.setState({
      [name]: value,
    });
  };

  closeDeleteModal = () => {
    this.setState({
      isDeleteOpen: false,
    });
  };

  deleteEvent = (id) => {
    const updateEvents = this.state.events.filter(event => {
      return event.id !== id;
    });
    this.setState({
      events: updateEvents,
      isDeleteOpen: false,
    })
  }

  render() {
    return (
      <div className="calendar">
        <DeleteEvent
          isDeleteOpen={this.state.isDeleteOpen}
          eventForDelete={this.state.eventForDelete}
          closeDeleteModal={this.closeDeleteModal}
          deleteEvent={this.deleteEvent}
        />
        <AddEvent
          isModalOpen={this.state.isModalOpen}
          onModalClose={this.onModalClose}
          name={this.state.name}
          eventDate={this.state.eventDate}
          eventTime={this.state.eventTime}
          handleChange={this.handleChange}
        />
        <Header
          date={this.state.date}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.onToday}
          onModalOpen={this.onModalOpen}
        />
        <CalendarSheet
          date={this.state.date}
          onModalOpen={this.onModalOpen}
          onDeleteModalOpen={this.onDeleteModalOpen}
          events={this.state.events}
        />
      </div>
    );
  }
}

export default Calendar;
