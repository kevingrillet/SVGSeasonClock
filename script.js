"use strict";

var init = function() {
  function daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  var date = new Date();
  var sec = date.getSeconds();
  var min = date.getMinutes();
  var hou = date.getHours() % 12;
  var wee = date.getDay();
  var day = date.getDate();
  var mon = date.getMonth();

  var aigSec = (sec * 360 / 60) % 360;
  var aigMin = ((min + sec / 60) * 360 / 60) % 360;
  var aigHou = ((hou + min / 60) * 360 / 12) % 360;
  var aigWee = ((wee + hou / 24) * 360 / 7) % 360;
  var aigDay = ((day + hou / 24) * 360 / 31) %360;
  var aigMon = ((mon + day / daysInMonth(date)) * 360 / 12) % 360;

  document
    .getElementById("aigSec")
    .setAttribute("transform", "rotate(" + aigSec + ")");
  document
    .getElementById("aigMin")
    .setAttribute("transform", "rotate(" + aigMin + ")");
  document
    .getElementById("aigHou")
    .setAttribute("transform", "rotate(" + aigHou + ")");
  document
    .getElementById("aigWee")
    .setAttribute("transform", "rotate(" + aigWee + ")");
  document
    .getElementById("aigDay")
    .setAttribute("transform", "rotate(" + aigDay + ")");
  document
    .getElementById("aigMon")
    .setAttribute("transform", "rotate(" + aigMon + ")");
};

window.addEventListener("load", function() {
  init();
});
