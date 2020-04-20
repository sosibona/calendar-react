import React from "react";
import generateNumbers from "../generateNumbers";

const RenderHours = () => {
  const hours = generateNumbers(1, 24).map((hour) => {
    return <div className="row-hour" data-hour={hour}></div>;
  });
  return { hours };
};

export default RenderHours;
