import React, { Component } from "react";
import DeleteEvent from "./PopUp/DeleteEvent";
import AddEvent from "./PopUp/AddEvent";
import Header from "./Header/Header";
import CalendarSheet from "./CalendarSheet";
import moment from "moment";
import getMonday from "./getMonday";

const baseUrl = "https://5e6b6f91d708a000160b48ba.mockapi.io/api/v1/events";

const events = [
  {
    id: "2",
    name: "Inverse reciprocal ability",
    eventDate: "04-17-2020",
    eventTime: ["00:45", "02:00"],
    additionalInfo: "additionalInfo 2",
    eventColor: "#afaddd",
  },
  {
    id: "3",
    name: "Robust actuating matrix",
    eventDate: "04-18-2020",
    eventTime: ["12:45", "14:00"],
    additionalInfo: "additionalInfo 3",
    eventColor: "#ef3aad",
  },
  {
    id: "4",
    name: "Down-sized transitional workforce",
    eventDate: "04-16-2020",
    eventTime: ["02:45", "04:30"],
    additionalInfo: "additionalInfo 4",
    eventColor: "#e56ddd",
  },
  {
    id: "5",
    name: "Robust bandwidth-monitored instruction set",
    eventDate: "04-21-2020",
    eventTime: ["03:45", "05:00"],
    additionalInfo: "additionalInfo 5",
    eventColor: "#ef3d67",
  },
  {
    id: "7",
    name: "Sharable client-driven architecture",
    eventDate: "04-20-2020",
    eventTime: ["08:45", "10:00"],
    additionalInfo: "additionalInfo 7",
    eventColor: "#ef45dd",
  },
  {
    id: "9",
    name: "Persistent analyzing process improvement",
    eventDate: "04-19-2020",
    eventTime: ["09:45", "11:00"],
    additionalInfo: "additionalInfo 9",
    eventColor: "#ef3ddd",
  },
  {
    id: "10",
    name: "Polarised multimedia core",
    eventDate: "04-18-2020",
    eventTime: ["01:45", "03:00"],
    additionalInfo: "additionalInfo 10",
    eventColor: "#ef65dd",
  },
  {
    id: "11",
    name: "Advanced impactful throughput",
    eventDate: "04-18-2020",
    eventTime: ["05:45", "09:00"],
    additionalInfo: "additionalInfo 11",
    eventColor: "#ef322d",
  },
  {
    id: "12",
    name: "Vision-oriented bandwidth-monitored circuit",
    eventDate: "04-17-2020",
    eventTime: ["05:45", "07:00"],
    additionalInfo: "additionalInfo 12",
    eventColor: "#ef333e",
  },
  {
    id: "13",
    name: "Advanced 3rd generation ability",
    eventDate: "04-16-2020",
    eventTime: ["10:45", "12:00"],
    additionalInfo: "additionalInfo 13",
    eventColor: "#aaaddd",
  },
  {
    id: "14",
    name: "Horizontal disintermediate interface",
    eventDate: "04-16-2020",
    eventTime: ["05:00", "06:00"],
    additionalInfo: "additionalInfo 14",
    eventColor: "#dddddd",
  },
];

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
    events: [
      // {
      //   id: "1",
      //   name: "Test",
      //   eventDate: "04-14-2020",
      //   eventTime: ["05:00", "05:30"],
      //   additionalInfo: "aaaaaaaa",
      //   eventColor: "#333aaa",
      // },
      // {
      //   id: "2",
      //   name: "Test2",
      //   eventDate: "04-14-2020",
      //   eventTime: ["05:30", "06:00"],
      //   additionalInfo: "aaaaaaaaaaa",
      //   eventColor: "#ef3ddd",
      // },
      // {
      //   id: "3",
      //   name: "Test2",
      //   eventDate: "04-15-2020",
      //   eventTime: ["05:45", "09:00"],
      //   additionalInfo: "dsadsdasds",
      //   eventColor: "#af62ad",
      // },
      // {
      //   id: "4",
      //   name: "Test2",
      //   eventDate: "04-16-2020",
      //   eventTime: ["05:00", "09:00"],
      //   additionalInfo: "asdasdasd",
      //   eventColor: "#aa3q1d",
      // },
    ],
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
      id: Math.random(),
      eventDate: moment(eventDate).format("MM-DD-YYYY"),
      eventTime,
      additionalInfo,
      name,
      eventColor,
    };
    const updateEvent = this.state.events.concat(newEvent);
    this.setState({
      events: updateEvent,
      isModalOpen: false,
    });
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
    const updateEvents = this.state.events.filter((event) => {
      return event.id !== id;
    });
    this.setState({
      events: updateEvents,
      isDeleteOpen: false,
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
    console.log(day, hour);
    const eventStartTime = `${hour.toString().padStart(2, "0")}:00`;
    const eventFinishTime = `${(hour + 1).toString().padStart(2, "0")}:00`;
    const dateToday = moment(new Date(day)).format("YYYY-MM-DD");
    console.log(eventStartTime, eventFinishTime);
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
    fetch(baseUrl)
      .then((response) => response.json())
      .then((events) =>
        this.setState({
          events: events,
        })
      );
  };

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
