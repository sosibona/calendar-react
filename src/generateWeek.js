import moment from 'moment';
import generateNumbers from './generateNumbers'
import getMonday from './getMonday'

const generateWeek = (date) => {
  const mondayDate = getMonday(date);
  const currentDateTimestamp = new Date(moment(mondayDate).format("L")).getTime();
  const oneDay = 86400000;
  const days = generateNumbers(0, 6).map((day) => {
    return currentDateTimestamp + day * oneDay;
  });
  return days;
}

export default generateWeek

