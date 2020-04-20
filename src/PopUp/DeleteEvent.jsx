import React from "react";

const DeleteEvent = ({ isDeleteOpen, eventForDelete, closeDeleteModal, deleteEvent }) => {
  if (!isDeleteOpen) return null;
  const { name, eventDate, additionalInfo, id } = eventForDelete;
  return (
    <div className="modal-delete">
      <button className="modal-delete__icon-close" onClick={closeDeleteModal}>
        <i className="far fa-times-circle"></i>
      </button>
      <div className="modal-delete__event">
        <i className="modal-delete__icon-title far fa-calendar-alt"></i>
        <h1 className="modal-delete__title">{name}</h1>
      </div>
      <div className="modal-delete__data">
        <i className="modal-delete__icon-data far fa-clock"></i>
        <span className="modal-delete__time">{eventDate}</span>
      </div>
      <div className="modal-delete__description">
        <i className="modal-delete__icon-description far fa-question-circle"></i>
        <span className="modal-delete__info">
          {additionalInfo === "" ? `No additional information` : additionalInfo}
        </span>
      </div>
      <button className="modal-delete__btn-delete-event" onClick={() => deleteEvent(id)}>Delete Event</button>
    </div>
  );
};

export default DeleteEvent;
