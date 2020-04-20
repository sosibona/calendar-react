import React from "react";
import UserPanel from "./UserPanel";
import Navigation from "./Navigation";
import './header.scss';

const Header = ({ date, nextWeek, prevWeek, onToday, onCreateModalOpen }) => {
  return (
    <header className="header">
      <UserPanel
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        onToday={onToday}
        date={date}
        onCreateModalOpen={onCreateModalOpen}
      />
      <Navigation date={date} />
    </header>
  );
};

export default Header;
