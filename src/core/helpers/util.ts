import moment from "moment";

function momentDateFormatter(date, fmt = "MMM DD, YYYY") {
  return moment(date).format(fmt);
}

export { momentDateFormatter };
