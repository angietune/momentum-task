const playList = document.querySelector(".play-list");
const audio = document.querySelector(".player-controls audio");
const progress = document.querySelector(".progress");
const seek = document.querySelector(".seek");
const total = document.querySelector(".total");
const playIcon = document.querySelector(".play");

audio.addEventListener("loadedmetadata", () => {
  displayDuration(audio.duration);
});

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

const displayDuration = () => {
  total.textContent = calculateTime(audio.duration);
};

function setDuration() {
  progress.max = Math.floor(audio.duration);
}
if (audio.readyState > 0) {
  displayDuration();
  setDuration();
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayDuration();
    setDuration();
  });
}

const whilePlaying = () => {
  progress.value = Math.floor(audio.currentTime);
};

audio.addEventListener("timeupdate", () => {
  seek.textContent = calculateTime(audio.currentTime);
  progress.value = Math.floor(audio.currentTime);
});

progress.addEventListener("change", () => {
  audio.currentTime = progress.value;
  if (!audio.paused) {
    requestAnimationFrame(whilePlaying);
  }
});

export const getList = () => {
  fetch("images/playListPop.json").then(async (res) => {
    try {
      const data = await res.json();
      setList(data);
      playAudio(data);
    } catch (err) {
      console.log(err);
    }
  });
};

const setList = (data) => {
  data.map((item) => {
    let li = document.createElement("li");
    li.className = "player-li-item";
    li.innerHTML = item.title;
    li.onclick = function () {
      audio.src = item.src;
      updateList(item.title);
      play();
    };
    playList.append(li);
  });
};

export function play() {
  audio.setAttribute("autoplay", "");
  if (audio.paused) {
    audio.play();
    playIcon.style.background = `url("images/svg/pause.svg")`;
  } else {
    audio.pause();
    playIcon.style.background = `url("images/svg/play.svg")`;
  }
}

export function volumeUpd() {
  const value = this.value;
  audio.volume = value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
}

export function playAudio(data) {
  let i = 0;
  let active = data[i].title;
  function next() {
    if (i === data.length - 1) {
      i = 0;
    } else {
      i++;
    }
    audio.src = data[i].src;
    active = data[i].title;
    updateList(active);
    play();
  }
  function prev() {
    if (i === data.length - 1) {
      i = data.length - 1;
    } else {
      i--;
    }
    audio.src = data[i].src;
    active = data[i].title;
    updateList(active);
    play();
  }
  if (audio === null) {
    throw "Playlist does not exists ...";
  } else {
    audio.src = data[i].src;
    audio.addEventListener("ended", next, false);
    document.querySelector(".play-next").addEventListener("click", next, false);
    document.querySelector(".play-prev").addEventListener("click", prev, false);
    updateList(active);
  }
}
function updateList(active) {
  const musicList = document.querySelectorAll(".player-li-item");
  musicList.forEach((item) => {
    if (item.innerHTML === active) {
      item.classList.add("player-active");
    } else {
      item.classList.remove("player-active");
    }
  });
}
// export const playAudio = () => {
//   fetch("https://radio35.p.rapidapi.com/", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "radio35.p.rapidapi.com",
//       "x-rapidapi-key": "2404ee17e9msh743547c26b04aa2p1c9e60jsn13f21a5f3ece",
//     },
//   })
//     .then((response) => {
//       response.json();
//     })
//     .then((data) => {
//       let audio = JSON.stringify(data);
//       console.log(audio);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };
