const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");

const apiData = {
  appid: "7672aec5cec5a1985f4214bcdd10c7e5",
  units: "metric",
  q: "Minsk",
  lang: "en",
};

city.addEventListener("change", getCity);

function getCity() {
  apiData.q = city.value;
  getWeather();
}

async function getWeather() {
  try {
    const data = await getWeatherData();
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `Temperature ${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind ${Math.round(data.wind.speed)}m/s`;
    humidity.textContent = `Humidity ${data.main.humidity}%`;
  } catch {
    city.value = "city not found";
  }
}

const weather = {
  coord: {
    lon: 27.5667,
    lat: 53.9,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 6.86,
    feels_like: 2.89,
    temp_min: 6.86,
    temp_max: 6.86,
    pressure: 1013,
    humidity: 72,
    sea_level: 1013,
    grnd_level: 986,
  },
  visibility: 10000,
  wind: {
    speed: 7.05,
    deg: 254,
    gust: 11.85,
  },
  clouds: {
    all: 100,
  },
  dt: 1635002531,
  sys: {
    type: 1,
    id: 8939,
    country: "BY",
    sunrise: 1634964745,
    sunset: 1635000924,
  },
  timezone: 10800,
  id: 625144,
  name: "Minsk",
  cod: 200,
};

async function getWeatherFakeData() {
  return new Promise((res) => {
    res(weather);
  });
}

async function getWeatherData() {
  let parametrs = new URLSearchParams(apiData);
  const url = `https://api.openweathermap.org/data/2.5/weather?${parametrs}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default getWeather;
