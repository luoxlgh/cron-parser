'use strict';

CronDate.prototype.addYear = function(nums) {
  const addYears = require('date-fns/add_years');
  this._date = addYears(this._date, nums ? nums : 1);
};

CronDate.prototype.addMonth = function(nums) {
  const addMonths = require('date-fns/add_months');
  this._date = addMonths(this._date, nums ? nums : 1);
};

CronDate.prototype.addDay = function(nums) {
  const addDays = require('date-fns/add_days');
  this._date = addDays(this._date, nums ? nums : 1);
};

CronDate.prototype.addHour = function() {
  const addHours = require('date-fns/add_hours');
  const startOfHour = require('date-fns/start_of_hour');
  var prev = this.getTime();
  this._date = startOfHour(addHours(this._date, 1));
  if (this.getTime() <= prev) {
    this._date = addHours(this._date, 1);
  }
};

CronDate.prototype.addMinute = function() {
  const addMinutes = require('date-fns/add_minutes');
  const startOfMinute = require('date-fns/start_of_minute');
  var prev = this.getTime();
  this._date = startOfMinute(addMinutes(this._date, 1));
  if (this.getTime() < prev) {
    this._date = addMinutes(this._date, 1);
  }
};

CronDate.prototype.addSecond = function() {
  const addSeconds = require('date-fns/add_seconds');
  const startOfSecond = require('date-fns/start_of_second');
  var prev = this.getTime();
  this._date = startOfSecond(addSeconds(this._date, 1));
  if (this.getTime() < prev) {
    this._date = addSeconds(this._date, 1);
  }
};

CronDate.prototype.subtractYear = function() {
  this.addYear(-1);
};

CronDate.prototype.subtractMonth = function() {
  const endOfMonth = require('date-fns/end_of_month')
  this.addMonth(-1);
  this._date = endOfMonth(this._date);
};

CronDate.prototype.subtractDay = function() {
  const endOfDay = require('date-fns/end_of_day');
  this.addDay(-1);
  this._date = endOfDay(this._date);
};

CronDate.prototype.subtractHour = function() {
  const addHours = require('date-fns/add_hours');
  const endOfHour = require('date-fns/end_of_hour');
  var prev = this.getTime();
  this._date = endOfHour(addHours(this._date, -1));
  if (this.getTime() >= prev) {
    this._date = addHours(this._date, -1);
  }
};

CronDate.prototype.subtractMinute = function() {
  const addMinutes = require('date-fns/add_minutes');
  const endOfMinute = require('date-fns/end_of_minute');
  var prev = this.getTime();
  this._date = endOfMinute(addMinutes(this._date, -1));
  if (this.getTime() > prev) {
    this._date = addMinutes(this._date, -1);
  }
};

CronDate.prototype.subtractSecond = function() {
  const addSeconds = require('date-fns/add_seconds');
  const endOfSecond = require('date-fns/end_of_second');
  var prev = this.getTime();
  this._date = endOfSecond(addSeconds(this._date, -1));
  if (this.getTime() > prev) {
    this._date = addSeconds(this._date, -1);
  }
};

CronDate.prototype.getDate = function() {
  const getDate = require('date-fns/get_date')
  return getDate(this._date);
};

CronDate.prototype.getFullYear = function() {
  const getYear = require('date-fns/get_year')
  return getYear(this._date);
};

CronDate.prototype.getDay = function() {
  const getDay = require('date-fns/get_day')
  return getDay(this._date);
};

CronDate.prototype.getMonth = function() {
  const getMonth = require('date-fns/get_month')
  return getMonth(this._date);;
};

CronDate.prototype.getHours = function() {
  const getHours = require('date-fns/get_hours')
  return getHours(this._date);
};

CronDate.prototype.getMinutes = function() {
  const getMinutes = require('date-fns/get_minutes')
  return getMinutes(this._date);
};

CronDate.prototype.getSeconds = function() {
  const getSeconds = require('date-fns/get_seconds')
  return getSeconds(this._date);
};

CronDate.prototype.getMilliseconds = function() {
  const getMilliseconds = require('date-fns/get_milliseconds')
  return getMilliseconds(this._date);
};

CronDate.prototype.getUTCDate = this.getDate;

CronDate.prototype.getUTCFullYear = this.getFullYear;

CronDate.prototype.getUTCDay = this.getDay;

CronDate.prototype.getUTCMonth = this.getMonth;

CronDate.prototype.getUTCHours = this.getHours;

CronDate.prototype.getUTCMinutes = this.getMinutes;

CronDate.prototype.getUTCSeconds = this.getSeconds;

CronDate.prototype.toISOString = function() {
  return this._date.toISOString();
};

CronDate.prototype.toJSON = function() {
  return this._date.toJSON();
};

CronDate.prototype.setDate = function(d) {
  const setDate = require('date-fns/set_date')
  return setDate(this._date, d);
};

CronDate.prototype.setFullYear = function(y) {
  const setYear = require('date-fns/set_year')
  return setYear(this._date, y);
};

CronDate.prototype.setDay = function(d) {
  const setDay = require('date-fns/set_day')
  return setDay(this._date, d);
};

CronDate.prototype.setMonth = function(m) {
  const setMonth = require('date-fns/set_month')
  return setMonth(this._date, m);
};

CronDate.prototype.setHours = function(h) {
  const setHours = require('date-fns/set_hours')
  return setHours(this._date, h);
};

CronDate.prototype.setMinutes = function(m) {
  const setMinutes = require('date-fns/set_minutes')
  return setMinutes(this._date, m);
};

CronDate.prototype.setSeconds = function(s) {
  const setSeconds = require('date-fns/set_seconds')
  return setSeconds(this._date, s);
};

CronDate.prototype.setMilliseconds = function(s) {
  const setMilliseconds = require('date-fns/set_milliseconds')
  return setMilliseconds(this._date, s);
};

CronDate.prototype.getTime = function() {
  const getTime = require('date-fns/get_time')
  return getTime(this._date);
};

CronDate.prototype.toString = function() {
  return this._date.toString();
};

CronDate.prototype.toDate = function() {
  return this._date;
};

function CronDate (timestamp) {
  if (timestamp instanceof CronDate) {
    timestamp = timestamp._date;
  }
  const parse = require('date-fns/parse')
  this._date = parse(timestamp || new Date());
}

module.exports = CronDate;
