import React from "react";
import { Component } from "react";

class AddEvent extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.createEvent();
  };

  render() {
    const {
      isModalOpen,
      onModalClose,
      eventDate,
      eventTime,
      additionalInfo,
      name,
      eventColor,
      handleChange,
    } = this.props;

    if (!isModalOpen) return null;
    return (
      <div className="modal-form">
        <button className="modal-form__icon-close" onClick={onModalClose}>
          <i className="far fa-times-circle"></i>
        </button>
        <span className="modal-form__error"></span>
        <form className="create-event" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            className="create-event__name"
            placeholder="Event"
            value={name}
            required
            onChange={handleChange}
          />
          <div className="create-event__time">
            <i className="create-event__icon-clock far fa-clock"></i>
            <input
              className="calendar-data"
              type="date"
              name="eventDate"
              required
              value={eventDate}
              onChange={handleChange}
            />
            <input
              className="startTime"
              type="time"
              name="startEvent"
              step="900"
              required
              value={eventTime[0]}
              onChange={handleChange}
            />
            <input
              className="endTime"
              type="time"
              name="endEvent"
              step="900"
              required
              value={eventTime[1]}
              onChange={handleChange}
            />
          </div>
          <div className="create-event__additional-info">
            <i className="create-event__additional-info-icon fas fa-stream"></i>
            <textarea
              className="create-event__additional-info-text"
              name="additionalInfo"
              cols="30"
              rows="5"
              placeholder="Additional informations"
              onChange={handleChange}
              value={additionalInfo}
            ></textarea>
          </div>
          <div className="create-event__additional">
            <input
              type="color"
              name="eventColor"
              value={eventColor}
              onChange={handleChange}
            />
            <button className="create-event__button" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEvent;
