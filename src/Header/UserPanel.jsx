import React from "react";
import ControlPanelUser from "./ControlPanelUser";
import Setting from "./Setting";

const UserPanel = ({nextWeek, prevWeek, onToday, date}) => {
  return (
    <div className="header__top-info">
      <ControlPanelUser nextWeek={nextWeek} prevWeek={prevWeek} onToday={onToday} date={date}/>
      <Setting />
    </div>
  );
};

export default UserPanel
