import React from "react";
import generateNumbers from "./generateNumbers";

const Hours = () => {
  const hours = generateNumbers(1, 24).map((hour) => {
    return <div className="row-hour" />
  });
  return { hours };
};

export default Hours;
