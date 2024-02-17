import moment from "moment";
import "moment-timezone";

export const dateHandler = (date) => {
  moment.locale("id");
  moment.tz("Asia/Jakarta");
  let now = moment();
  // console.log(`Date from DB GMT 0 ${date}`);
  let momentDate = moment(date);
  // console.log(`Moment Date to Jakarta time ${momentDate}`);
  let time = momentDate.fromNow(true);
  let dateByHourAndMin = momentDate.format("HH:mm");
  const getDays = () => {
    let days = time.split(" ")[0];
    if (Number(days) < 8) {
      return now.subtract(Number(days), "days").format("dddd");
    } else {
      return momentDate.format("DD/MM/YYYY");
    }
  };
  if (time === "a few seconds") {
    return "Now";
  }
  if (time.search("minute") !== -1) {
    let mins = time.split(" ")[0];
    if (mins === "a") {
      return "1 min";
    } else {
      return `${mins} min`;
    }
  }
  if (time.search("hour") !== -1) {
    return dateByHourAndMin;
  }
  if (time === "a day") {
    return "Yesterday";
  }
  if (time.search("days") !== -1) {
    return getDays();
  }
  return time;
};
