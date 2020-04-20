import React, { Component } from "react";
import Header from "./Header/Header";
import CalendarSheet from "./CalendarSheet/CalendarSheet";
import moment from "moment";
import getMonday from "./getMonday";
import PopUp from './PopUp/PopUp'
import { fetchEventsList, deleteEvent, createEvent } from "./eventGateway";

class Calendar extends Component {
  state = {
    date: new Date(),
    name: "",
    eventDate: null,
    eventTime: [],
    eventColor: "#47d6dc",
    additionalInfo: "",
    isModalOpen: false,
    isDeleteOpen: false,
    eventForDelete: null,
    events: [],
  };

  createEvent = () => {
    const {
      eventDate,
      eventTime,
      additionalInfo,
      name,
      eventColor,
    } = this.state;
    const newEvent = {
      eventDate: moment(eventDate).format("MM-DD-YYYY"),
      eventTime,
      additionalInfo,
      name,
      eventColor,
    };
    createEvent(newEvent).then(() => {
      this.setState({
        isModalOpen: false,
      });
      return this.fetchEvents();
    });
  };

  nextWeek = () => {
    const { date } = this.state;
    this.setState({
      date: new Date(date.setDate(date.getDate() + 7)),
    });
  };

  prevWeek = () => {
    const { date } = this.state;
    this.setState({
      date: new Date(date.setDate(date.getDate() - 7)),
    });
  };

  onToday = (date) => {
    const mondayDateCurrentWeek = getMonday(new Date()).getTime();
    const mondayDateCheck = getMonday(date).getTime();

    if (mondayDateCurrentWeek === mondayDateCheck) return;
    this.setState({
      date: new Date(),
    });
  };

  onCreateModalOpen = () => {
    const eventStartTime = `${(new Date().getHours() + 1)
      .toString()
      .padStart(2, "0")}:00`;
    const eventFinishTime = `${(new Date().getHours() + 2)
      .toString()
      .padStart(2, "0")}:00`;
    const dateToday = moment(new Date()).format("YYYY-MM-DD");

    this.setState({
      isModalOpen: true,
      eventDate: dateToday,
      name: "",
      additionalInfo: "",
      eventTime: [eventStartTime, eventFinishTime],
    });
  };

  onDeleteModalOpen = (event, eventId) => {
    event.stopPropagation();
    this.setState({
      isDeleteOpen: true,
      eventForDelete: eventId,
    });
  };

  onModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  closeDeleteModal = () => {
    this.setState({
      isDeleteOpen: false,
    });
  };

  deleteEvent = (id) => {
    deleteEvent(id).then(() => {
      this.setState({
        isDeleteOpen: false,
      });
      return this.fetchEvents();
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
      return;
    } else if (name === "endEvent") {
      const finish = value;
      this.state.eventTime.splice(1, 1, finish);
      this.setState({
        eventTime: this.state.eventTime,
      });
      return;
    }
    this.setState({
      [name]: value,
    });
  };

  onСellModalOpen = (day, hour) => {
    const todayHour = new Date().getHours();
    const todayTimestamp = new Date(
      moment(new Date()).format("MM-DD-YYYY")
    ).getTime();

    if (todayTimestamp > day || (todayTimestamp === day && todayHour >= hour))
      return;

    const eventStartTime = `${hour.toString().padStart(2, "0")}:00`;
    const eventFinishTime = `${(hour + 1).toString().padStart(2, "0")}:00`;
    const dateToday = moment(new Date(day)).format("YYYY-MM-DD");

    this.setState({
      isModalOpen: true,
      eventDate: dateToday,
      name: "",
      additionalInfo: "",
      eventTime: [eventStartTime, eventFinishTime],
    });
  };

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetchEventsList().then((events) =>
      this.setState({
        events: events,
      })
    );
  };

  render() {
    return (
      <div className="calendar">
        <PopUp
          isDeleteOpen={this.state.isDeleteOpen}
          eventForDelete={this.state.eventForDelete}
          closeDeleteModal={this.closeDeleteModal}
          deleteEvent={this.deleteEvent}
          isModalOpen={this.state.isModalOpen}
          onModalClose={this.onModalClose}
          name={this.state.name}
          eventDate={this.state.eventDate}
          eventTime={this.state.eventTime}
          additionalInfo={this.state.additionalInfo}
          handleChange={this.handleChange}
          eventColor={this.state.eventColor}
          createEvent={this.createEvent}
        />
        <Header
          date={this.state.date}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.onToday}
          onCreateModalOpen={this.onCreateModalOpen}
        />
        <CalendarSheet
          date={this.state.date}
          onСellModalOpen={this.onСellModalOpen}
          onDeleteModalOpen={this.onDeleteModalOpen}
          events={this.state.events}
        />
      </div>
    );
  }
}

export default Calendar;
