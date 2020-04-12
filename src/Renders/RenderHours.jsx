import React from 'react';

const renderArray = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i++) {
    newList.push(i);
  }
  return newList;
};

const RenderHours = () => {
  const hours = renderArray(1,24).map(hour => {
    return (
      <div className="row-hour" data-hour={hour}></div>
    )
  })
  console.log(hours)
  return (
    {hours}
  )
}

export default RenderHours;