const greeting = document.querySelector(".greeting");

export const getTimeOfDayEn = () => {
  const timeOfDay = new Date();
  const hours = timeOfDay.getHours();
  if (hours >= 0 && hours < 6) {
    greeting.innerHTML = `Good night, `;
    return "night";
  } else if (hours >= 6 && hours < 12) {
    greeting.innerHTML = `Good morning, `;
    return "morning";
  } else if (hours >= 12 && hours < 18) {
    greeting.innerHTML = `Good afternoon, `;
    return "day";
  } else if (hours >= 18 && hours < 24) {
    greeting.innerHTML = `Good evening, `;
    return "evening";
  }
};

export const getTimeOfDayRu = () => {
  const timeOfDay = new Date();
  const hours = timeOfDay.getHours();
  if (hours >= 0 && hours < 6) {
    greeting.innerHTML = `Доброй ночи, `;
    return "night";
  } else if (hours >= 6 && hours < 12) {
    greeting.innerHTML = `Доброе утро, `;
    return "morning";
  } else if (hours >= 12 && hours < 18) {
    greeting.innerHTML = `Добрый день, `;
    return "day";
  } else if (hours >= 18 && hours < 24) {
    greeting.innerHTML = `Добрый вечер, `;
    return "evening";
  }
};
