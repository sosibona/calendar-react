import React from "react";
import RenderDaysOfWeek from '../Renders/RenderDaysOfWeek'
import GreenwichZone from "../GreenwichZone";
import RenderDate from "../Renders/RenderDate";

const Navigation = () => {
  return (
    <nav className="navigation">
      <RenderDaysOfWeek />
      <RenderDate />
      <GreenwichZone />
    </nav>
  );
};

export default Navigation;
