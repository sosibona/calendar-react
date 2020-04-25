import React from "react";
import DaysOfWeek from './DaysOfWeek'
import GreenwichZone from "./GreenwichZone";
import DateOfMonth from "../CalendarSheet/DateOfMonth";

const Navigation = ({date}) => {
  
  return (
    <nav className="navigation">
      <DaysOfWeek />
      <DateOfMonth date={date}/>
      <GreenwichZone />
    </nav>
  );
};

export default Navigation;
