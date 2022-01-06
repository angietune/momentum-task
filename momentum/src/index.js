import "./sass/styles.scss";
import "./sass/switch.scss";
import { setBg, setBgFlickr } from "./js/bgSlider";
import getQuotes from "./js/quotes";
import getWeather from "./js/weather";
import { getList, volumeUpd, play } from "./js/player";
import { setLocalStorage, getLocalStorage } from "./js/storage";
import showTime from "./js/time";
import { openSettings, addListeners } from "./js/settings";
import { getTodoList } from "./js/todo";

const onAppLoad = () => {
  document.querySelector(".change-quote").addEventListener("click", getQuotes);
  document.querySelector(".play").addEventListener("click", play);
  document.querySelector(".volume").addEventListener("input", volumeUpd);
  document.querySelector(".settings").addEventListener("click", openSettings);
  getQuotes();
  addListeners();
  showTime();
  getLocalStorage();
  getTodoList();
  // setBg();
  setBgFlickr();
  getWeather();
  getList();
};

window.addEventListener("load", onAppLoad);
window.addEventListener("beforeunload", setLocalStorage);
