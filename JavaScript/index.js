//
const mainContent = document.querySelector("main");

//
const secondsTo = document.querySelector("[data-secondsTo]");

//
function fromYears() {
  const input = document.querySelector(".input.years");
  months = input.value * 12;
  console.log(months);
  document.querySelector(".input.months").value = months;
  weeks = Math.round(input.value * 52.143);
  document.querySelector(".input.weeks").value = weeks;
  console.log(weeks);
  days = input.value * 365.25;
  document.querySelector(".input.days").value = days;
  console.log(days);
  hours = input.value * 8760;
  document.querySelector(".input.hours").value = hours;
  console.log(hours);
  minutes = input.value * 525600;
  document.querySelector(".input.minutes").value = minutes;
  console.log(minutes);
  seconds = input.value * 31540000;
  document.querySelector(".input.seconds").value = seconds;
  console.log(seconds);
}

//
function fromMonths() {
  const input = document.querySelector(".input.months");
  years = (input.value / 12).toFixed(2);
  console.log(years);
  document.querySelector(".input.years").value = years;
  weeks = Math.floor(input.value * 4.345);
  document.querySelector(".input.weeks").value = weeks;
  console.log(weeks);
  days = Math.round(input.value * 30.417);
  document.querySelector(".input.days").value = days;
  console.log(days);
  hours = input.value * 730;
  document.querySelector(".input.hours").value = hours;
  console.log(hours);
  minutes = input.value * 43800;
  document.querySelector(".input.minutes").value = minutes;
  console.log(minutes);
  seconds = input.value * 2628000;
  document.querySelector(".input.seconds").value = seconds;
  console.log(seconds);
}

//
function fromWeeks() {
  const input = document.querySelector(".input.weeks");
  years = (input.value / 52.143).toFixed(2);
  console.log(years);
  document.querySelector(".input.years").value = years;
  months = (input.value / 4.345).toFixed(2);
  document.querySelector(".input.months").value = months;
  console.log(months);
  days = input.value * 7;
  document.querySelector(".input.days").value = days;
  console.log(days);
  hours = input.value * 168;
  document.querySelector(".input.hours").value = hours;
  console.log(hours);
  minutes = input.value * 10080;
  document.querySelector(".input.minutes").value = minutes;
  console.log(minutes);
  seconds = input.value * 604800;
  document.querySelector(".input.seconds").value = seconds;
  console.log(seconds);
}

//
function fromDays() {
  const input = document.querySelector(".input.days");
  years = (input.value / 365).toFixed(2);
  console.log(years);
  document.querySelector(".input.years").value = years;
  months = (input.value / 30.417).toFixed(2);
  document.querySelector(".input.months").value = months;
  console.log(months);
  weeks = (input.value / 7).toFixed(2);
  document.querySelector(".input.weeks").value = weeks;
  console.log(weeks);
  hours = input.value * 24;
  document.querySelector(".input.hours").value = hours;
  console.log(hours);
  minutes = input.value * 1440;
  document.querySelector(".input.minutes").value = minutes;
  console.log(minutes);
  seconds = input.value * 86400;
  document.querySelector(".input.seconds").value = seconds;
  console.log(seconds);
}

//
function fromHours() {
  const input = document.querySelector(".input.hours");
  years = (input.value / 8760).toFixed(2);
  console.log(years);
  document.querySelector(".input.years").value = years;
  months = (input.value / 730).toFixed(2);
  document.querySelector(".input.months").value = months;
  console.log(months);
  weeks = (input.value / 168).toFixed(2);
  document.querySelector(".input.weeks").value = weeks;
  console.log(weeks);
  days = (input.value / 24).toFixed(2);
  document.querySelector(".input.days").value = days;
  console.log(days);
  minutes = input.value * 60;
  document.querySelector(".input.minutes").value = minutes;
  console.log(minutes);
  seconds = input.value * 3600;
  document.querySelector(".input.seconds").value = seconds;
  console.log(seconds);
}

//
function fromMinutes() {
  const input = document.querySelector(".input.minutes");
  years = (input.value / 525600).toFixed(2);
  console.log(years);
  document.querySelector(".input.years").value = years;
  months = (input.value / 43800).toFixed(2);
  document.querySelector(".input.months").value = months;
  console.log(months);
  weeks = (input.value / 10080).toFixed(2);
  document.querySelector(".input.weeks").value = weeks;
  console.log(weeks);
  days = (input.value / 10080).toFixed(2);
  document.querySelector(".input.days").value = days;
  console.log(days);
  hours = (input.value / 60).toFixed(2);
  document.querySelector(".input.hours").value = hours;
  console.log(hours);
  seconds = input.value * 60;
  document.querySelector(".input.seconds").value = seconds;
  console.log(seconds);
}

//
function fromSeconds() {
  const input = document.querySelector(".input.seconds");
  years = (input.value / 31536000).toFixed(2);
  console.log(years);
  document.querySelector(".input.years").value = years;
  months = (input.value / 2628000).toFixed(2);
  document.querySelector(".input.months").value = months;
  console.log(months);
  weeks = (input.value / 604800).toFixed(2);
  document.querySelector(".input.weeks").value = weeks;
  console.log(weeks);
  days = (input.value / 86400).toFixed(2);
  document.querySelector(".input.days").value = days;
  console.log(days);
  hours = (input.value / 3600).toFixed(2);
  document.querySelector(".input.hours").value = hours;
  console.log(hours);
  minutes = (input.value / 60).toFixed(2);
  document.querySelector(".input.minutes").value = minutes;
  console.log(minutes);
}

// This will take in the main value entered by the user
const inputYears = document.querySelector(".input.years");
const inputMonths = document.querySelector(".input.months");
const inputWeeks = document.querySelector(".input.weeks");
const inputDays = document.querySelector(".input.days");
const inputHours = document.querySelector(".input.hours");
const inputMinutes = document.querySelector(".input.minutes");
const inputSeconds = document.querySelector(".input.seconds");

//
inputYears.addEventListener("input", () => fromYears());
inputMonths.addEventListener("input", () => fromMonths());
inputWeeks.addEventListener("input", () => fromWeeks());
inputDays.addEventListener("input", () => fromDays());
inputHours.addEventListener("input", () => fromHours());
inputMinutes.addEventListener("input", () => fromMinutes());
inputSeconds.addEventListener("input", () => fromSeconds());
