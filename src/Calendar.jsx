import React, { Component } from "react";
import DeleteEvent from "./PopUp/DeleteEvent";
import AddEvent from "./PopUp/AddEvent";
import Header from "./Header/Header";
import CalendarSheet from "./CalendarSheet";

class Calendar extends Component {
  state = {
    date: new Date(),
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
      date: new Date()
    })
  }

  render() {
    return (
      <div className="calendar">
        <DeleteEvent />
        <AddEvent />
        <Header
          date={this.state.date}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          onToday={this.onToday}
        />
        <CalendarSheet date={this.state.date}/>
      </div>
    );
  }
}

export default Calendar;
