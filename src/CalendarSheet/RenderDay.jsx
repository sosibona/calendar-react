import React from "react";
import generateNumbers from "../generateNumbers";
import RenderEvent from "../Renders/RenderEvent";
import RealTimeLine from "../RealTimeLine/RealTimeLine";
import moment from 'moment'

const RenderDay = ({
  dayOfWeek,
  event,
  day,
  onDeleteModalOpen,
  onСellModalOpen
}) => {
  const dateToday = moment(new Date()).format("YYYY-MM-DD");
  const isToday = day === +moment(dateToday).format('x');
  const hours = generateNumbers(0, 23).map((hour) => {
    const evenInThisTime = event.filter((e) => {
      const convertStartTime = e.eventTime[0].split(":");
      const startTime = +convertStartTime[0];
      return startTime === hour;
    });
    return (
      <div
        key={hour}
        className="row-hour"
        data-hour={hour}
        onClick={() => onСellModalOpen(day, hour)}
      >
        {evenInThisTime.length > 0 && (
          <RenderEvent
            events={evenInThisTime}
            onDeleteModalOpen={onDeleteModalOpen}
          />
        )}
      </div>
    );
  });
  return (
    <div className="day-by-hours" data-date-of-day={dayOfWeek}>
      {hours}
      {isToday && <RealTimeLine />}
    </div>
  );
};

export default RenderDay;
