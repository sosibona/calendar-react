import React from "react";
import DeleteEvent from './DeleteEvent';
import AddEvent from './AddEvent'
import './popUp.scss';

const PopUp = ({
  isDeleteOpen,
  eventForDelete,
  closeDeleteModal,
  deleteEvent,
  isModalOpen,
  onModalClose,
  name,
  eventDate,
  eventTime,
  additionalInfo,
  handleChange,
  eventColor,
  createEvent,
}) => {
  return (
    <>
      <DeleteEvent
        isDeleteOpen={isDeleteOpen}
        eventForDelete={eventForDelete}
        closeDeleteModal={closeDeleteModal}
        deleteEvent={deleteEvent}
      />
      <AddEvent
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        name={name}
        eventDate={eventDate}
        eventTime={eventTime}
        additionalInfo={additionalInfo}
        handleChange={handleChange}
        eventColor={eventColor}
        createEvent={createEvent}
      />
    </>
  );
};

export default PopUp;
