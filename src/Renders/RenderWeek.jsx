import React from "react";
import RenderDay from "./RenderDay";
import generateWeek from "../generateWeek";


const RenderWeek = ({date}) => {
  const week =  generateWeek(date)
  const weekList = week.map((day) => (
    <RenderDay key={day} dayOfWeek={day} />
  ));

  return (
    <section className="current-week">
     {weekList}
    </section>
  );
};

export default RenderWeek;
