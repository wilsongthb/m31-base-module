import moment from "moment";
import { MOMENT_TIME_FORMAT } from "../consts";

export const momentFormat = function(momentInstance = moment) {
  return function(value, format, formatInput = "") {
    return momentInstance(value, formatInput || undefined).format(format);
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
    return time.format(MOMENT_TIME_FORMAT);
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
