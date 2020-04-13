import moment from 'moment';

const getMonday = (date) => {
  const getDate = date.getDate();
  let getDay = date.getDay();
  if (getDay === 0) getDay = 7;
  const getMonday = date.setDate(getDate - getDay + 1);
  const monday = new Date(moment(new Date(getMonday)).format("L"));
  return monday;
};

export default getMonday;