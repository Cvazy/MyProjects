const timeWrapper = document.querySelector(".timer_row");
const dayBlock = document.querySelector(
  ".timer_row .timer_block:nth-child(1) .timer_block__number",
);
const hoursBlock = document.querySelector(
  ".timer_row .timer_block:nth-child(2) .timer_block__number",
);
const minutesBlock = document.querySelector(
  ".timer_row .timer_block:nth-child(3) .timer_block__number",
);
const secondsBlock = document.querySelector(
  ".timer_row .timer_block:nth-child(4) .timer_block__number",
);
const timeTitle = document.querySelector(".timer_section__title");

const countDownDate = new Date("Sep 7, 2024 00:00:00").getTime();

const countDownFunction = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayBlock.innerHTML = days;
  hoursBlock.innerHTML = hours;
  minutesBlock.innerHTML = minutes;
  secondsBlock.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(this);
    timeTitle.textContent = "Сегодня день свадьбы";
    timeWrapper.classList.add("d-none-imp");
    timeTitle.classList.add("timer_end");
  }
}, 1000);
