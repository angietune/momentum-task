const pixabay = {
  key: "12951416-9d00a693b0d6fb3f4cf65e6ec",
  q: "nature+morning",
  image_type: "photo",
  orientation: "horizontal",
  category: "nature",
  min_width: 2000,
  safesearch: "true",
  pretty: true,
};

const parametrs = new URLSearchParams(pixabay);
const url = `https://pixabay.com/api/?${parametrs}`;

export const getBgPixabay = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setBgPixabay(data.hits))
    .catch((error) => {
      console.log(error);
    });
};
