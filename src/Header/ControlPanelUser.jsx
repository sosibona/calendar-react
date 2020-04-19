import React from "react";
import ShowMonth from "./ShowMonth";

const ControlPanelUser = ({ nextWeek, prevWeek, onToday, date, onCreateModalOpen}) => {
  return (
    <>
      <button className="button header__create" onClick={onCreateModalOpen}>
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path fill="#34A853" d="M16 16v14h4V20z"></path>
          <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
          <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
          <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>
        Create
      </button>
      <button className="button header__today" onClick={() => onToday(date)}>Today</button>
      <button className="change-week-btn" onClick={prevWeek}>
        <i className="header__angle fas fa-angle-left angle-left"></i>
      </button>
      <button className="change-week-btn" onClick={nextWeek}>
        <i className="header__angle fas fa-angle-right angle-rigth"></i>
      </button>
      <ShowMonth date={date}/>
    </>
  );
};

export default ControlPanelUser;
