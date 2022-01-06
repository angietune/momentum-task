const body = document.querySelector("body");
import { getTimeOfDayEn, getTimeOfDayRu } from "./timeOfDay";
import { flickrMorning } from "./API/flickr";

export function setBg() {
  let num = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  const getUrl = () => {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/angietune/stage1-tasks/assets/images/${getTimeOfDayEn()}/${num}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url('${img.src}')`;
    };
  };
  getUrl();
  document.querySelector(".slide-prev").addEventListener(
    "click",
    () => {
      num--;
      getUrl();
    },
    false
  );
  document.querySelector(".slide-next").addEventListener(
    "click",
    () => {
      num++;
      getUrl();
    },
    false
  );
}

export function setBgFlickr() {
  console.log(flickrMorning.photos.photo[0].server);
  if (flickrMorning) {
    let num = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const getUrl = () => {
      const img = new Image();
      img.src = `https://live.staticflickr.com/${flickrMorning.photos.photo[num].server}/${flickrMorning.photos.photo[num].id}_${flickrMorning.photos.photo[num].secret}_b.jpg`;
      img.onload = () => {
        body.style.backgroundImage = `url('https://live.staticflickr.com/${flickrMorning.photos.photo[num].server}/${flickrMorning.photos.photo[num].id}_${flickrMorning.photos.photo[num].secret}_b.jpg')`;
      };
    };
    getUrl();
    document.querySelector(".slide-prev").addEventListener(
      "click",
      () => {
        num--;
        getUrl();
      },
      false
    );
    document.querySelector(".slide-next").addEventListener(
      "click",
      () => {
        num++;
        getUrl();
      },
      false
    );
  } else {
    setBg();
  }
}

export function setBgPixabay(data) {
  console.log(data);
  if (data) {
    const num = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const img = new Image();
    img.src = data[num].largeImageURL;
    img.onload = () => {
      body.style.backgroundImage = `url('${data[num].largeImageURL}')`;
    };
  } else {
    setBg();
  }
}
