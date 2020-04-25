import generateWeek from "../CalendarSheet/generateWeek";
import moment from "moment";

const getDisplayedMonth = (date) => {
  const week = generateWeek(date);
  const firstDayOfWeek = new Date(week[0]);
  const lastDayOfWeek = new Date(week[week.length - 1]);

  const currentYearForFirstDayOfWeek = moment(firstDayOfWeek).format("YYYY");
  const currentYearForLastDayOfWeek = moment(lastDayOfWeek).format("YYYY");
  return {
    monthForFirstDayOfWeek: moment(firstDayOfWeek).format("MMMM"),
    monthForLastDayOfWeek: moment(lastDayOfWeek).format("MMMM"),
    currentYear: currentYearForFirstDayOfWeek === currentYearForLastDayOfWeek
      ? `${currentYearForFirstDayOfWeek}`
      : `${currentYearForFirstDayOfWeek} - ${currentYearForLastDayOfWeek}`
  }
}

export default getDisplayedMonth;