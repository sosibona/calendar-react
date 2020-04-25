import React from "react";
import { PureComponent } from "react";

const formatter = new Intl.DateTimeFormat("en", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

class GreenwichZone extends PureComponent {
  render() {
    const [formatterHour] = formatter.format(new Date()).split(":");
    const timeDifference = (new Date().getHours() - +formatterHour).toString();
    const greenwichTime = `GMT +${
      timeDifference.length < 2 ? timeDifference.padStart(2, 0) : timeDifference
    }:00`;
    return <span className="greenwich-zone">{greenwichTime}</span>;
  }
}

export default GreenwichZone;
