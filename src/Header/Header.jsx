import React from "react";
import UserPanel from "./UserPanel";
import Navigation from "./Navigation";

const Header = ({ date, nextWeek, prevWeek, onToday, onModalOpen }) => {
  return (
    <header className="header">
      <UserPanel
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        onToday={onToday}
        date={date}
        onModalOpen={onModalOpen}
      />
      <Navigation date={date} />
    </header>
  );
};

export default Header;
