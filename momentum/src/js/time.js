const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

import showDate from "./date";
import { getTimeOfDayEn } from "./timeOfDay";

export const showTime = () => {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const currentHour = hour.toLocaleString().padStart(2, "0");
    const currentMinutes = minute.toLocaleString().padStart(2, "0");
    const currentSeconds = second.toLocaleString().padStart(2, "0");

    hours.innerHTML = currentHour;
    minutes.innerHTML = currentMinutes;
    seconds.innerHTML = currentSeconds;

    showDate();
    getTimeOfDayEn();
  }, 1000);
};
export default showTime;
