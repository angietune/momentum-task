const date = document.querySelector(".date");

const showDate = () => {
  const day = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = day.toLocaleDateString("en-Br", options);
  date.innerHTML = currentDate;
};
export default showDate;
