import React from "react";

const AddEvent = ({isModalOpen, onModalClose}) => {
  if (!isModalOpen) return null;
  return (
    <div className="modal-form">
      <button className="modal-form__icon-close" onClick={onModalClose}>
        <i className="far fa-times-circle"></i>
      </button>
      <span className="modal-form__error"></span>
      <form className="create-event">
        <input
          type="text"
          name="nameOfEvent"
          id="name"
          className="create-event__name"
          placeholder="Event"
          required
        />
        <div className="create-event__time">
          <i className="create-event__icon-clock far fa-clock"></i>
          <input
            className="calendar-data"
            type="date"
            id="date"
            name="data"
            min="2020-02-20"
            max="2040-12-31"
            required
          />
          <input
            className="startTime"
            type="time"
            id="startTime"
            name="startEvent"
            min="00:00"
            max="24:00"
            step="900"
            required
          />
          <input
            className="endTime"
            type="time"
            id="endTime"
            name="endEvent"
            min="00:00"
            max="24:00"
            step="900"
            required
          />
        </div>
        <div className="create-event__additional-info">
          <i className="create-event__additional-info-icon fas fa-stream"></i>
          <textarea
            className="create-event__additional-info-text"
            name="description"
            id="info"
            cols="30"
            rows="5"
            placeholder="Additional informations"
          ></textarea>
        </div>
        <div className="create-event__additional">
          <input type="color" id="event" name="eventColor"  />
          {/* value="#47d6dc" */}
          <button className="create-event__button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
