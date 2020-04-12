import React from 'react';

const renderArray = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i++) {
    newList.push(i);
  }
  return newList;
};

const RenderDate = () => {
  const dateList = renderArray(1, 7).map(date => {
  return <span key={date} className="curent-date-of-week">{date}</span>
  })
  return (
  <div className="date-of-month">{dateList}</div>
  )
}

export default RenderDate;