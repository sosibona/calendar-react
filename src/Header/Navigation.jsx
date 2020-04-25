import React from "react";
import DaysOfWeek from './DaysOfWeek'
import GreenwichZone from "./GreenwichZone";
import RenderDate from "../CalendarSheet/DateOfMonth";

const Navigation = ({date}) => {
  
  return (
    <nav className="navigation">
      <DaysOfWeek />
      <RenderDate date={date}/>
      <GreenwichZone />
    </nav>
  );
};

export default Navigation;
