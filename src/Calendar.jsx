import React, { Component } from "react";
import DeleteEvent from "./PopUp/DeleteEvent";
import AddEvent from "./PopUp/AddEvent";
import Header from "./Header/Header";
import CalendarSheet from "./CalendarSheet";

const date = new Date()

class Calendar extends Component {
  state = {
    date: date
  }
  render() {
    return (
      <div className="calendar">
        <DeleteEvent />
        <AddEvent />
        <Header date={this.state.date}/>
        <CalendarSheet date={this.state.date}/>
      </div>
    );
  }
}

export default Calendar;
