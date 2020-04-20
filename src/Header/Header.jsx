import React, { PureComponent } from "react";
import UserPanel from "./UserPanel";
import Navigation from "./Navigation";
import "./header.scss";

class Header extends PureComponent {
  render() {
    const { date, nextWeek, prevWeek, onToday, onCreateModalOpen } = this.props;
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
  }
}
// const Header = ({ date, nextWeek, prevWeek, onToday, onCreateModalOpen }) => {
//   return (
//     <header className="header">
//       <UserPanel
//         nextWeek={nextWeek}
//         prevWeek={prevWeek}
//         onToday={onToday}
//         date={date}
//         onCreateModalOpen={onCreateModalOpen}
//       />
//       <Navigation date={date} />
//     </header>
//   );
// };

export default Header;
