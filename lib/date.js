'use strict';
const addYears = require('date-fns/add_years');
const addMonths = require('date-fns/add_months');
const addDays = require('date-fns/add_days');
const addHours = require('date-fns/add_hours');
const startOfHour = require('date-fns/start_of_hour');
const addMinutes = require('date-fns/add_minutes');
const startOfMinute = require('date-fns/start_of_minute');
const addSeconds = require('date-fns/add_seconds');
const startOfSecond = require('date-fns/start_of_second');
const endOfMonth = require('date-fns/end_of_month')
const endOfDay = require('date-fns/end_of_day');
const endOfHour = require('date-fns/end_of_hour');
const endOfMinute = require('date-fns/end_of_minute');
const endOfSecond = require('date-fns/end_of_second');
const getDate = require('date-fns/get_date')
const getYear = require('date-fns/get_year')
const getDay = require('date-fns/get_day')
const getMonth = require('date-fns/get_month')
const getHours = require('date-fns/get_hours')
const getMinutes = require('date-fns/get_minutes')
const getSeconds = require('date-fns/get_seconds')
const getMilliseconds = require('date-fns/get_milliseconds')
const setDate = require('date-fns/set_date')
const setYear = require('date-fns/set_year')
const setDay = require('date-fns/set_day')
const setMonth = require('date-fns/set_month')
const setHours = require('date-fns/set_hours')
const setMinutes = require('date-fns/set_minutes')
const setSeconds = require('date-fns/set_seconds')
const setMilliseconds = require('date-fns/set_milliseconds')
const getTime = require('date-fns/get_time')
const parse = require('date-fns/parse')

CronDate.prototype.addYear = function(nums) {
  this._date = addYears(this._date, nums ? nums : 1);
};

CronDate.prototype.addMonth = function(nums) {
  this._date = addMonths(this._date, nums ? nums : 1);
};

CronDate.prototype.addDay = function(nums) {
  this._date = addDays(this._date, nums ? nums : 1);
};

CronDate.prototype.addHour = function() {
  var prev = this.getTime();
  this._date = startOfHour(addHours(this._date, 1));
  if (this.getTime() <= prev) {
    this._date = addHours(this._date, 1);
  }
};

CronDate.prototype.addMinute = function() {
  var prev = this.getTime();
  this._date = startOfMinute(addMinutes(this._date, 1));
  if (this.getTime() < prev) {
    this._date = addMinutes(this._date, 1);
  }
};

CronDate.prototype.addSecond = function() {
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
  this.addMonth(-1);
  this._date = endOfMonth(this._date);
};

CronDate.prototype.subtractDay = function() {
  this.addDay(-1);
  this._date = endOfDay(this._date);
};

CronDate.prototype.subtractHour = function() {
  var prev = this.getTime();
  this._date = endOfHour(addHours(this._date, -1));
  if (this.getTime() >= prev) {
    this._date = addHours(this._date, -1);
  }
};

CronDate.prototype.subtractMinute = function() {
  var prev = this.getTime();
  this._date = endOfMinute(addMinutes(this._date, -1));
  if (this.getTime() > prev) {
    this._date = addMinutes(this._date, -1);
  }
};

CronDate.prototype.subtractSecond = function() {
  var prev = this.getTime();
  this._date = endOfSecond(addSeconds(this._date, -1));
  if (this.getTime() > prev) {
    this._date = addSeconds(this._date, -1);
  }
};

CronDate.prototype.getDate = function() {
  return getDate(this._date);
};

CronDate.prototype.getFullYear = function() {
  return getYear(this._date);
};

CronDate.prototype.getDay = function() {
  return getDay(this._date);
};

CronDate.prototype.getMonth = function() {
  return getMonth(this._date);;
};

CronDate.prototype.getHours = function() {
  return getHours(this._date);
};

CronDate.prototype.getMinutes = function() {
  return getMinutes(this._date);
};

CronDate.prototype.getSeconds = function() {
  return getSeconds(this._date);
};

CronDate.prototype.getMilliseconds = function() {
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
  return setDate(this._date, d);
};

CronDate.prototype.setFullYear = function(y) {
  return setYear(this._date, y);
};

CronDate.prototype.setDay = function(d) {
  return setDay(this._date, d);
};

CronDate.prototype.setMonth = function(m) {
  return setMonth(this._date, m);
};

CronDate.prototype.setHours = function(h) {
  return setHours(this._date, h);
};

CronDate.prototype.setMinutes = function(m) {
  return setMinutes(this._date, m);
};

CronDate.prototype.setSeconds = function(s) {
  return setSeconds(this._date, s);
};

CronDate.prototype.setMilliseconds = function(s) {
  return setMilliseconds(this._date, s);
};

CronDate.prototype.getTime = function() {
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
  this._date = parse(timestamp || new Date());
}

module.exports = CronDate;
