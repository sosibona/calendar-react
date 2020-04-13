import React from "react";
import RenderDaysOfWeek from '../Renders/RenderDaysOfWeek'
import GreenwichZone from "../GreenwichZone";
import RenderDate from "../Renders/RenderDate";

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
