import React from "react";

const Setting = () => {
  return (
    <>
      <span className="header__setting-icon">
        <i className="fas fa-sliders-h"></i>
      </span>
      <div className="header__setting switch-setting">
        <div>
          <input type="color" id="window" name="window"  />
          <label htmlFor="window">Main Window </label>
        </div>
        <div>
          <input type="color" id="header" name="header" />
          <label htmlFor="header">Header</label>
        </div>
        <div>
          <input type="color" id="event" name="event"  />
          <label htmlFor="event">Events</label>
        </div>
        <div>
          <input
            type="color"
            id="borderEvent"
            name="borderEvent"
          />
          <label htmlFor="borderEvent">Border Events</label>
        </div>
        <div>
          <input
            type="color"
            id="textEvents"
            name="textEvents"
          />
          <label htmlFor="textEvents">Text Events</label>
        </div>
        <div className="header__setting-btn">
          <button className="header-btn btn-setting">Save</button>
          <button className="header-btn btn-setting-default">Default</button>
        </div>
      </div>
    </>
  );
};

export default Setting;
