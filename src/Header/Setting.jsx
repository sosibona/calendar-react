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
          {/* value="#ffffff" */}
          <label htmlFor="window">Main Window </label>
        </div>
        <div>
          <input type="color" id="header" name="header" />
          {/* value="#ffffff" */}
          <label htmlFor="header">Header</label>
        </div>
        <div>
          <input type="color" id="event" name="event"  />
          {/* value="#47d6dc" */}
          <label htmlFor="event">Events</label>
        </div>
        <div>
          <input
            type="color"
            id="borderEvent"
            name="borderEvent"
            // value="#0000ff"
          />
          <label htmlFor="borderEvent">Border Events</label>
        </div>
        <div>
          <input
            type="color"
            id="textEvents"
            name="textEvents"
            // value="#000000"
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
