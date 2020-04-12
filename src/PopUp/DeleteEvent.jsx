import React from "react";

const DeleteEvent = () => {
  return (
    <div className="modal-delete">
      <span className="modal-delete__icon-close">
        <i className="far fa-times-circle"></i>
      </span>
      <div className="modal-delete__event">
        <i className="modal-delete__icon-title far fa-calendar-alt"></i>
        <h1 className="modal-delete__title">Event</h1>
      </div>
      <div className="modal-delete__data">
        <i className="modal-delete__icon-data far fa-clock"></i>
        <span className="modal-delete__time"></span>
      </div>
      <div className="modal-delete__description">
        <i className="modal-delete__icon-description far fa-question-circle"></i>
        <span className="modal-delete__info"></span>
      </div>
      <button className="modal-delete__btn-delete-event">Delete</button>
      <div className="change-color">
        <input type="color" id="eventColor" name="eventColor"  /> 
        {/* value="#47d6dc" */}
        <button className="header-btn modal-delete__btn-change-color">
          Change color
        </button>
      </div>
    </div>
  );
};

export default DeleteEvent;
