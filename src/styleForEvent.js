const styleForEvent = (event) => {
  const [startTime, endTime] = event.eventTime;
  let [getStartHour, getStartMinutes] = startTime.split(':').map(elem => +elem);
  let [getEndHour, getEndMinutes] = endTime.split(':').map(elem => +elem);

  if (getEndHour - getStartHour === 0) {
    return {
      height: `${getEndMinutes - getStartMinutes}px`,
      top: `${getStartMinutes}px`,
      backgroundColor: `${event.eventColor}`
    }
  } else if (getEndHour - getStartHour === 1 && getStartMinutes > getEndMinutes) {
    getEndMinutes += 60;
    return {
      height: `${getEndMinutes - getStartMinutes}px`,
      top: `${getStartMinutes}px`,
      backgroundColor: `${event.eventColor}`
    }
  } else {
    return {
      height: `${60 * (getEndHour - getStartHour) + (getEndMinutes - getStartMinutes)}px`,
      top: `${getStartMinutes}px`,
      backgroundColor: `${event.eventColor}`
    }

  }
}

export default styleForEvent;