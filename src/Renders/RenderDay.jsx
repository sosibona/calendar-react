import React from "react";
import generateNumbers from "../generateNumbers";
import RenderEvent from "./RenderEvent";

const RenderDay = ({
  dayOfWeek,
  onModalOpen,
  day,
  event,
  onDeleteModalOpen,
}) => {
  const hours = generateNumbers(1, 24).map((hour) => {
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
        onClick={() => onModalOpen(day, hour)}
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
    </div>
  );
};

export default RenderDay;
