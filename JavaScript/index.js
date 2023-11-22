// This will take in the main value entered by the user
let input = document.querySelector(".mainInput");

// Function will convert years into months
function toMonths() {
  let input = document.querySelector(".mainInput").value;
  months = input * 12;
  console.log(months);
  document.querySelectorAll("span")[0].innerText = months;
}

function toWeeks() {
  let input = document.querySelector(".mainInput").value;
  let weeks = document.querySelector(".display.weeks");
  weeks = Math.floor(input * 52.143);
  document.querySelectorAll("span")[1].innerText = weeks;
  console.log(weeks);
}

function toDays() {
  let input = document.querySelector(".mainInput").value;
  let days = document.querySelector(".display.days");
  days = input * 365.25;
  document.querySelectorAll("span")[2].innerText = days;
  console.log(days);
}

function toHours() {
  let input = document.querySelector(".mainInput");
  let hours = document.querySelector(".display.hours");
  hours = input.value * 8760;
  document.querySelectorAll("span")[3].innerText = hours;
  console.log(hours);
}

function toMinutes() {
  let input = document.querySelector(".mainInput");
  let minutes = document.querySelector(".display.minutes");
  minutes = input.value * 525600;
  document.querySelectorAll("span")[4].innerText = minutes;
  console.log(minutes);
}

function toSeconds() {
  let input = document.querySelector(".mainInput");
  let seconds = document.querySelector(".display.seconds");
  seconds = input.value * 31540000;
  document.querySelectorAll("span")[5].innerText = seconds;
  console.log(seconds);
}

//
let convertBtn = document.getElementsByTagName("button")[7];
convertBtn.addEventListener("click", () => toMonths());
convertBtn.addEventListener("click", () => toWeeks());
convertBtn.addEventListener("click", () => toDays());
convertBtn.addEventListener("click", () => toHours());
convertBtn.addEventListener("click", () => toMinutes());
convertBtn.addEventListener("click", () => toSeconds());
