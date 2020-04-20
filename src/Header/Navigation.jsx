import React from "react";
import RenderDaysOfWeek from './RenderDaysOfWeek'
import GreenwichZone from "./GreenwichZone";
import RenderDate from "../CalendarSheet/RenderDate";

const Navigation = ({date}) => {
  
  return (
    <nav className="navigation">
      <RenderDaysOfWeek />
      <RenderDate date={date}/>
      <GreenwichZone />
    </nav>
  );
};

export default Navigation;
