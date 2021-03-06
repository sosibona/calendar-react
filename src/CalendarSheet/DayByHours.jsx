import React from "react";
import generateNumbers from "./generateNumbers";
import Event from "../Event/Event";
import RealTimeLine from "../RealTimeLine/RealTimeLine";
import moment from 'moment'

const DayByHours = ({
  event,
  day,
  onDeleteModalOpen,
  onСellModalOpen
}) => {
  const dateToday = moment(new Date()).format("YYYY-MM-DD");
  const isToday = day === +moment(dateToday).format('x');
  const hours = generateNumbers(0, 23).map((hour) => {
    const evenInThisTime = event.filter((e) => {
      if (!e.eventTime[0]) return false;
      const convertStartTime = e.eventTime[0].split(":");
      const startTime = +convertStartTime[0];
      return startTime === hour;
    });
    return (
      <div
        key={hour}
        className="row-hour"
        onClick={() => onСellModalOpen(day, hour)}
      >
        {evenInThisTime.length > 0 && (
          <Event
            events={evenInThisTime}
            onDeleteModalOpen={onDeleteModalOpen}
          />
        )}
      </div>
    );
  });
  return (
    <div className="day-by-hours">
      {hours}
      {isToday && <RealTimeLine />}
    </div>
  );
};

export default DayByHours;
