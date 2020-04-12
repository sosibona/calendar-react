import React from "react";
import UserPanel from './UserPanel'
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <header className="header">
      <UserPanel date={props.date}/>
      <Navigation />
    </header>
  );
};

export default Header;
