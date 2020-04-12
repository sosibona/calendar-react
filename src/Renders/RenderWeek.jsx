import React from "react";
import moment from "moment";
import RenderDay from "./RenderDay";

const renderArray = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i++) {
    newList.push(i);
  }
  return newList;
};

const RenderWeek = () => {
  const currentDateTimestamp = new Date(moment(new Date()).format("L")).getTime();
  const oneDay = 86400000;
  const days = renderArray(0, 6).map((day) => {
    return currentDateTimestamp + day * oneDay;
  });
  const weekList = days.map((day) => (
    <RenderDay key={day} dayOfWeek={day} />
  ));

  return (
    <section className="current-week">
     {weekList}
    </section>
  );
};

export default RenderWeek;
