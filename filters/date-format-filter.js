import moment from "moment";

export const momentFormat = function(momentInstance = moment) {
  return function(value, format, formatInput = "YYYY-MM-DD hh:mm") {
    return momentInstance(value, formatInput).format(format);
  };
};

export const dateFormatFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    return time.format("L");
  };
};

export const relativeTimeFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    return time.fromNow();
  };
};

export const calendarFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    return time.calendar();
  };
};

export const timeFormatFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    // return time.format("LT");
    return time.format("hh:mma");
  };
};

export const dateTimeFormatFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    return time.format("LLL");
  };
};

export const simpleDateFormatFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    return time.format("D MMM");
  };
};

export const ageFilter = function(moment) {
  return function(value) {
    if (!value) value = "";
    let time = moment(value);
    return time.fromNow(true);
  };
};
