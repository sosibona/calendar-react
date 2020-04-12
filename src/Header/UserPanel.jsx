import React from "react";
import ControlPanelUser from "./ControlPanelUser";
import Setting from "./Setting";

const UserPanel = (props) => {
  return (
    <div className="header__top-info">
      <ControlPanelUser />
      <Setting />
    </div>
  );
};

export default UserPanel
