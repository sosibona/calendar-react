import React, { Component } from "react";
import DeleteEvent from "./PopUp/DeleteEvent";
import AddEvent from "./PopUp/AddEvent";
import Header from "./Header/Header";
import CalendarSheet from "./CalendarSheet";

class Calendar extends Component {
  state = {
    date: new Date(),
    isModalOpen: false,
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

  onModalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  onModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className="calendar">
        <DeleteEvent />
        <AddEvent
          isModalOpen={this.state.isModalOpen}
          onModalClose={this.onModalClose}
        />
        <Header
          date={this.state.date}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.onToday}
          onModalOpen={this.onModalOpen}
        />
        <CalendarSheet date={this.state.date} />
      </div>
    );
  }
}

export default Calendar;
