import React from "react";
import styleForEvent from "../styleForEvent";

const RenderEvent = ({ events, onDeleteModalOpen }) => {
  const eventsList = events.map((meet) => {
    const style = styleForEvent(meet);
    return (
      <div
        data-id="11"
        className="event"
        style={style}
        onClick={(event) => onDeleteModalOpen(event, meet)}
      >
        <span>
          {meet.eventTime[0]} - {meet.eventTime[1]}
        </span>
        <span>{meet.name}</span>
    <span className="event__description">{meet.additionalInfo}</span>
      </div>
    );
  });
  return <>{eventsList}</>;
};

export default RenderEvent;
